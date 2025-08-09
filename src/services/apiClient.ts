import type { ApiResponse, ApiError } from '@/types';
import { useAuthStore } from '@/stores';

class ApiClient {
  private baseURL: string;
  private timeout: number;

  constructor() {
    this.baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';
    this.timeout = 10000; // 10 seconds
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`;
    
    // Get auth token from store
    const tokens = useAuthStore.getState().tokens;
    
    const config: RequestInit = {
      timeout: this.timeout,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    // Add auth header if token exists
    if (tokens?.accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${tokens.accessToken}`,
      };
    }

    // Add CSRF token if available
    const csrfToken = import.meta.env.VITE_CSRF_TOKEN;
    if (csrfToken) {
      config.headers = {
        ...config.headers,
        'X-CSRF-Token': csrfToken,
      };
    }

    try {
      const response = await fetch(url, config);
      
      // Handle 401 Unauthorized - attempt token refresh
      if (response.status === 401 && tokens?.refreshToken) {
        try {
          await useAuthStore.getState().refreshToken();
          
          // Retry original request with new token
          const newTokens = useAuthStore.getState().tokens;
          if (newTokens?.accessToken) {
            config.headers = {
              ...config.headers,
              Authorization: `Bearer ${newTokens.accessToken}`,
            };
            
            return this.request<T>(endpoint, options);
          }
        } catch (refreshError) {
          // Refresh failed, logout user
          useAuthStore.getState().logout();
          throw new Error('Session expired. Please log in again.');
        }
      }

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        const error: ApiError = {
          message: errorData.message || `HTTP error! status: ${response.status}`,
          code: errorData.code || response.status.toString(),
          details: errorData.details,
        };
        throw error;
      }

      const data: ApiResponse<T> = await response.json();
      
      if (!data.success) {
        const error: ApiError = {
          message: data.message || 'API request failed',
          code: 'API_ERROR',
          details: { errors: data.errors },
        };
        throw error;
      }

      return data;
    } catch (error) {
      if (error instanceof TypeError && error.message.includes('fetch')) {
        throw new Error('Network error. Please check your internet connection.');
      }
      throw error;
    }
  }

  async get<T>(endpoint: string, params?: Record<string, string>): Promise<ApiResponse<T>> {
    let url = endpoint;
    
    if (params) {
      const searchParams = new URLSearchParams(params);
      url += `?${searchParams.toString()}`;
    }

    return this.request<T>(url, {
      method: 'GET',
    });
  }

  async post<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async put<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async patch<T>(endpoint: string, data?: unknown): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
    });
  }

  async upload<T>(endpoint: string, formData: FormData): Promise<ApiResponse<T>> {
    const tokens = useAuthStore.getState().tokens;
    
    const config: RequestInit = {
      method: 'POST',
      body: formData,
      headers: {},
    };

    // Add auth header if token exists
    if (tokens?.accessToken) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${tokens.accessToken}`,
      };
    }

    // Don't set Content-Type for FormData - browser will set it with boundary
    return this.request<T>(endpoint, config);
  }
}

// Create singleton instance
const apiClient = new ApiClient();

export default apiClient;
