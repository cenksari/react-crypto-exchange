import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '@/stores';
import { authService } from '@/services';
import { ROUTES } from '@/utils/constants';
import toast from 'react-hot-toast';
import type { LoginCredentials, RegisterCredentials } from '@/types';

export const useAuth = () => {
  const navigate = useNavigate();
  const {
    user,
    tokens,
    isLoading,
    isAuthenticated,
    login: loginStore,
    register: registerStore,
    logout: logoutStore,
    setLoading,
  } = useAuthStore();

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      setLoading(true);
      await loginStore(credentials);
      toast.success('Successfully logged in!');
      navigate(ROUTES.MARKET);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed';
      toast.error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [loginStore, navigate, setLoading]);

  const register = useCallback(async (credentials: RegisterCredentials) => {
    try {
      setLoading(true);
      await registerStore(credentials);
      toast.success('Account created successfully! Please check your email for verification.');
      navigate(ROUTES.AUTH.SIGNIN);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Registration failed';
      toast.error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [registerStore, navigate, setLoading]);

  const logout = useCallback(async () => {
    try {
      await authService.logout();
      logoutStore();
      toast.success('Successfully logged out!');
      navigate(ROUTES.AUTH.SIGNIN);
    } catch (error) {
      // Even if server logout fails, clear local state
      logoutStore();
      navigate(ROUTES.AUTH.SIGNIN);
    }
  }, [logoutStore, navigate]);

  const forgotPassword = useCallback(async (email: string) => {
    try {
      setLoading(true);
      await authService.forgotPassword({ email });
      toast.success('Password reset instructions have been sent to your email.');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to send reset email';
      toast.error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [setLoading]);

  const changePassword = useCallback(async (passwordData: {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
  }) => {
    try {
      setLoading(true);
      await authService.changePassword(passwordData);
      toast.success('Password changed successfully!');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to change password';
      toast.error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [setLoading]);

  const updateProfile = useCallback(async (userData: Partial<typeof user>) => {
    try {
      setLoading(true);
      const updatedUser = await authService.updateProfile(userData);
      useAuthStore.getState().setUser(updatedUser);
      toast.success('Profile updated successfully!');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to update profile';
      toast.error(message);
      throw error;
    } finally {
      setLoading(false);
    }
  }, [setLoading, user]);

  return {
    // State
    user,
    tokens,
    isLoading,
    isAuthenticated,

    // Actions
    login,
    register,
    logout,
    forgotPassword,
    changePassword,
    updateProfile,
  };
};

export default useAuth;
