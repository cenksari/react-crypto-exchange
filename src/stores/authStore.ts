import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import type { User, AuthTokens, LoginCredentials, RegisterCredentials } from '@/types';

interface AuthStore {
  // State
  user: User | null;
  tokens: AuthTokens | null;
  isLoading: boolean;
  isAuthenticated: boolean;

  // Actions
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
  setUser: (user: User | null) => void;
  setTokens: (tokens: AuthTokens | null) => void;
  setLoading: (loading: boolean) => void;
  clearError: () => void;
}

const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set, get) => ({
        // Initial state
        user: null,
        tokens: null,
        isLoading: false,
        isAuthenticated: false,

        // Actions
        login: async (credentials: LoginCredentials) => {
          set({ isLoading: true }, false, 'auth/login-start');
          
          try {
            // This would be replaced with actual API call
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(credentials),
            });

            if (!response.ok) {
              throw new Error('Login failed');
            }

            const data = await response.json();
            
            set({
              user: data.user,
              tokens: data.tokens,
              isAuthenticated: true,
              isLoading: false,
            }, false, 'auth/login-success');

          } catch (error) {
            set({
              isLoading: false,
              isAuthenticated: false,
            }, false, 'auth/login-error');
            
            throw error;
          }
        },

        register: async (credentials: RegisterCredentials) => {
          set({ isLoading: true }, false, 'auth/register-start');
          
          try {
            // This would be replaced with actual API call
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/register`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(credentials),
            });

            if (!response.ok) {
              throw new Error('Registration failed');
            }

            set({ isLoading: false }, false, 'auth/register-success');

          } catch (error) {
            set({ isLoading: false }, false, 'auth/register-error');
            throw error;
          }
        },

        logout: () => {
          set({
            user: null,
            tokens: null,
            isAuthenticated: false,
          }, false, 'auth/logout');

          // Clear persisted data
          localStorage.removeItem('auth-storage');
        },

        refreshToken: async () => {
          const { tokens } = get();
          
          if (!tokens?.refreshToken) {
            throw new Error('No refresh token available');
          }

          try {
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/refresh`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokens.refreshToken}`,
              },
            });

            if (!response.ok) {
              throw new Error('Token refresh failed');
            }

            const data = await response.json();
            
            set({
              tokens: data.tokens,
            }, false, 'auth/refresh-success');

          } catch (error) {
            // If refresh fails, logout user
            get().logout();
            throw error;
          }
        },

        setUser: (user: User | null) => {
          set({ user }, false, 'auth/set-user');
        },

        setTokens: (tokens: AuthTokens | null) => {
          set({ tokens }, false, 'auth/set-tokens');
        },

        setLoading: (loading: boolean) => {
          set({ isLoading: loading }, false, 'auth/set-loading');
        },

        clearError: () => {
          // Error handling can be added here if needed
        },
      }),
      {
        name: 'auth-storage',
        partialize: (state) => ({
          user: state.user,
          tokens: state.tokens,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    ),
    {
      name: 'auth-store',
    }
  )
);

export default useAuthStore;
