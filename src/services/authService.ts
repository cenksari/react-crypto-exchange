import apiClient from './apiClient';
import type { 
  User, 
  LoginCredentials, 
  RegisterCredentials, 
  AuthTokens, 
  ForgotPasswordRequest, 
  ResetPasswordRequest,
  ChangePasswordRequest 
} from '@/types';

export class AuthService {
  async login(credentials: LoginCredentials): Promise<{ user: User; tokens: AuthTokens }> {
    const response = await apiClient.post<{ user: User; tokens: AuthTokens }>('/auth/login', credentials);
    return response.data;
  }

  async register(credentials: RegisterCredentials): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>('/auth/register', credentials);
    return response.data;
  }

  async logout(): Promise<void> {
    try {
      await apiClient.post('/auth/logout');
    } catch (error) {
      // Even if logout fails on server, clear local state
      console.error('Logout error:', error);
    }
  }

  async refreshToken(refreshToken: string): Promise<AuthTokens> {
    const response = await apiClient.post<AuthTokens>('/auth/refresh', { refreshToken });
    return response.data;
  }

  async getProfile(): Promise<User> {
    const response = await apiClient.get<User>('/auth/profile');
    return response.data;
  }

  async updateProfile(userData: Partial<User>): Promise<User> {
    const response = await apiClient.patch<User>('/auth/profile', userData);
    return response.data;
  }

  async changePassword(passwordData: ChangePasswordRequest): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>('/auth/change-password', passwordData);
    return response.data;
  }

  async forgotPassword(data: ForgotPasswordRequest): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>('/auth/forgot-password', data);
    return response.data;
  }

  async resetPassword(data: ResetPasswordRequest): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>('/auth/reset-password', data);
    return response.data;
  }

  async verifyEmail(token: string): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>('/auth/verify-email', { token });
    return response.data;
  }

  async resendEmailVerification(): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>('/auth/resend-verification');
    return response.data;
  }

  async enable2FA(): Promise<{ qrCode: string; secret: string }> {
    const response = await apiClient.post<{ qrCode: string; secret: string }>('/auth/2fa/enable');
    return response.data;
  }

  async verify2FA(token: string, secret: string): Promise<{ backupCodes: string[] }> {
    const response = await apiClient.post<{ backupCodes: string[] }>('/auth/2fa/verify', { token, secret });
    return response.data;
  }

  async disable2FA(token: string): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>('/auth/2fa/disable', { token });
    return response.data;
  }

  async verifyPhone(code: string): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>('/auth/verify-phone', { code });
    return response.data;
  }

  async resendPhoneVerification(): Promise<{ message: string }> {
    const response = await apiClient.post<{ message: string }>('/auth/resend-phone-verification');
    return response.data;
  }
}

// Create singleton instance
const authService = new AuthService();
export default authService;
