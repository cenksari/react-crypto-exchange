export interface User {
  id: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
  is2FAEnabled: boolean;
  kycStatus: 'pending' | 'approved' | 'rejected' | 'not_started';
  createdAt: string;
  updatedAt: string;
}

export interface LoginCredentials {
  phone: string;
  password: string;
  twoFactorCode?: string;
}

export interface RegisterCredentials {
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  firstName: string;
  lastName: string;
  agreeToTerms: boolean;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface AuthState {
  user: User | null;
  tokens: AuthTokens | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface PasswordValidation {
  hasMinLength: boolean;
  hasUppercase: boolean;
  hasLowercase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
}
