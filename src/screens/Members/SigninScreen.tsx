import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeOff } from 'lucide-react';
import { clsx } from 'clsx';

// hooks
import { useAuth } from '@/hooks/useAuth';

// components
import Box from '@/components/Common/Box';
import MainLayout from '@/layouts/MainLayout';
import FormInput from '@/components/Forms/FormInput';
import FormButton from '@/components/Forms/FormButton';

// utils
import { loginSchema, sanitizeInput, ROUTES } from '@/utils';
import type { LoginCredentials } from '@/types';

const SigninScreen: React.FC = () => {
  const { login, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    watch,
  } = useForm<LoginCredentials>({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
  });

  const watchedFields = watch();

  /**
   * Handles form submission with enhanced security
   */
  const onSubmit = async (data: LoginCredentials) => {
    try {
      // Sanitize inputs before submission
      const sanitizedData = {
        phone: sanitizeInput(data.phone),
        password: data.password, // Don't sanitize password as it might remove valid characters
        twoFactorCode: data.twoFactorCode ? sanitizeInput(data.twoFactorCode) : undefined,
      };

      await login(sanitizedData);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  /**
   * Handles phone number input with formatting and validation
   */
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    
    // Format phone number (basic US format)
    if (value.length >= 10) {
      value = value.replace(/(\d{3})(\d{3})(\d{4}).*/, '($1) $2-$3');
    }
    
    setValue('phone', value, { shouldValidate: true });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <MainLayout>
      <div className='flex flex-center full-height'>
        <div className='login no-select'>
          <Box>
            <div className='box-vertical-padding box-horizontal-padding'>
              <div>
                <div className='form-logo center'>
                  <img
                    draggable='false'
                    alt='Crypto Exchange'
                    src='/images/logo.png'
                  />
                </div>
                <h1 className='form-title center'>Sign in</h1>
                <p className='form-desc center'>
                  Please make sure that <strong>https://pro.cryptoexchange.com</strong> is written
                  in your browser's address bar.
                </p>
                
                <form noValidate className='form' onSubmit={handleSubmit(onSubmit)}>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='phone' className='form-label'>
                          Phone number *
                        </label>
                        <FormInput
                          {...register('phone')}
                          type='tel'
                          name='phone'
                          autoComplete='tel'
                          onChange={handlePhoneChange}
                          value={watchedFields.phone || ''}
                          placeholder='(555) 123-4567'
                          className={clsx(
                            errors.phone && 'border-red-500 focus:border-red-500'
                          )}
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {errors.phone && (
                          <div id="phone-error" className="form-error" role="alert">
                            {errors.phone.message}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className='form-line'>
                      <div className='full-width relative'>
                        <label htmlFor='password' className='form-label'>
                          Password *
                        </label>
                        <div className="relative">
                          <FormInput
                            {...register('password')}
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            autoComplete='current-password'
                            placeholder='Enter your password'
                            className={clsx(
                              'pr-10',
                              errors.password && 'border-red-500 focus:border-red-500'
                            )}
                            aria-invalid={!!errors.password}
                            aria-describedby={errors.password ? 'password-error' : undefined}
                          />
                          <button
                            type="button"
                            className="absolute inset-y-0 right-0 flex items-center px-3"
                            onClick={togglePasswordVisibility}
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                          >
                            {showPassword ? (
                              <EyeOff className="h-4 w-4 text-gray-400" />
                            ) : (
                              <Eye className="h-4 w-4 text-gray-400" />
                            )}
                          </button>
                        </div>
                        {errors.password && (
                          <div id="password-error" className="form-error" role="alert">
                            {errors.password.message}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Two-Factor Authentication Code (optional) */}
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='twoFactorCode' className='form-label'>
                          Two-Factor Code (if enabled)
                        </label>
                        <FormInput
                          {...register('twoFactorCode')}
                          type='text'
                          name='twoFactorCode'
                          autoComplete='one-time-code'
                          placeholder='000000'
                          maxLength={6}
                          className={clsx(
                            errors.twoFactorCode && 'border-red-500 focus:border-red-500'
                          )}
                          aria-invalid={!!errors.twoFactorCode}
                        />
                        {errors.twoFactorCode && (
                          <div className="form-error" role="alert">
                            {errors.twoFactorCode.message}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className='form-line'>
                      <div className='full-width right'>
                        <Link 
                          to={ROUTES.AUTH.FORGOT_PASSWORD}
                          className="text-sm text-indigo-600 hover:text-indigo-500"
                        >
                          Forgot password?
                        </Link>
                      </div>
                    </div>
                    
                    <div className='form-line'>
                      <div className='buttons'>
                        <FormButton 
                          type="submit"
                          text={isLoading ? 'Signing in...' : 'Sign in'}
                          disabled={!isValid || isLoading}
                          className={clsx(
                            'w-full',
                            (!isValid || isLoading) && 'opacity-50 cursor-not-allowed'
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className='form-line'>
                      <div className='center'>
                        <p className="text-sm">
                          If you don't have an account,{' '}
                          <Link 
                            to={ROUTES.AUTH.SIGNUP}
                            className="text-indigo-600 hover:text-indigo-500 font-medium"
                          >
                            create a new account
                          </Link>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </MainLayout>
  );
};

export default SigninScreen;
