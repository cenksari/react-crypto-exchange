import { z } from 'zod';
import type { PasswordValidation } from '@/types';

// Password validation schema
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

// Email validation schema
export const emailSchema = z
  .string()
  .email('Invalid email address')
  .min(1, 'Email is required');

// Phone validation schema
export const phoneSchema = z
  .string()
  .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format')
  .min(10, 'Phone number must be at least 10 digits')
  .max(15, 'Phone number must not exceed 15 digits');

// Login credentials schema
export const loginSchema = z.object({
  phone: phoneSchema,
  password: z.string().min(1, 'Password is required'),
  twoFactorCode: z.string().optional(),
});

// Registration schema
export const registerSchema = z.object({
  email: emailSchema,
  phone: phoneSchema,
  password: passwordSchema,
  confirmPassword: z.string(),
  firstName: z.string().min(1, 'First name is required').max(50, 'First name is too long'),
  lastName: z.string().min(1, 'Last name is required').max(50, 'Last name is too long'),
  agreeToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms'),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

// Forgot password schema
export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

// Reset password schema
export const resetPasswordSchema = z.object({
  token: z.string().min(1, 'Token is required'),
  password: passwordSchema,
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  message: 'Passwords do not match',
  path: ['confirmPassword'],
});

// Change password schema
export const changePasswordSchema = z.object({
  currentPassword: z.string().min(1, 'Current password is required'),
  newPassword: passwordSchema,
  confirmNewPassword: z.string(),
}).refine(data => data.newPassword === data.confirmNewPassword, {
  message: 'Passwords do not match',
  path: ['confirmNewPassword'],
});

// Order creation schema
export const createOrderSchema = z.object({
  symbol: z.string().min(1, 'Symbol is required'),
  side: z.enum(['buy', 'sell']),
  type: z.enum(['market', 'limit']),
  quantity: z.number().positive('Quantity must be positive'),
  price: z.number().positive('Price must be positive').optional(),
}).refine(data => {
  if (data.type === 'limit' && !data.price) {
    return false;
  }
  return true;
}, {
  message: 'Price is required for limit orders',
  path: ['price'],
});

// Utility functions
export const validatePassword = (password: string): PasswordValidation => {
  return {
    hasMinLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[^A-Za-z0-9]/.test(password),
  };
};

export const isPasswordValid = (password: string): boolean => {
  const validation = validatePassword(password);
  return Object.values(validation).every(Boolean);
};

export const sanitizeInput = (input: string): string => {
  return input
    .replace(/[<>]/g, '') // Remove < and > to prevent basic XSS
    .trim();
};

export const sanitizeHtml = (html: string): string => {
  const div = document.createElement('div');
  div.textContent = html;
  return div.innerHTML;
};

export const validateEmail = (email: string): boolean => {
  return emailSchema.safeParse(email).success;
};

export const validatePhone = (phone: string): boolean => {
  return phoneSchema.safeParse(phone).success;
};

export const formatPhoneNumber = (phone: string): string => {
  // Remove all non-digit characters
  const digits = phone.replace(/\D/g, '');
  
  // Add country code if not present
  if (digits.length === 10 && !digits.startsWith('1')) {
    return `+1${digits}`;
  } else if (digits.length === 11 && digits.startsWith('1')) {
    return `+${digits}`;
  }
  
  return digits.startsWith('+') ? digits : `+${digits}`;
};

// Error message helpers
export const getFieldError = (errors: Record<string, string[]>, field: string): string | undefined => {
  return errors[field]?.[0];
};

export const hasFieldError = (errors: Record<string, string[]>, field: string): boolean => {
  return Boolean(errors[field]?.length);
};
