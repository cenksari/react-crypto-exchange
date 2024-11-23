import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

// components
import Box from '../../components/Common/Box';
import MainLayout from '../../layouts/MainLayout';
import FormInput from '../../components/Forms/FormInput';
import FormButton from '../../components/Forms/FormButton';

// interfaces
interface IFormProps {
  phone: string;
  password: string;
}

const SigninScreen = (): JSX.Element => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<IFormProps>({
    phone: '',
    password: '',
  });

  /**
   * Handles input changes in the sign-in form.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   * @returns {void}
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  /**
   * Handles the form submission for the sign-in screen.
   *
   * @param {React.FormEvent} e - The form submission event.
   * @returns {void}
   */
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    navigate('/market');
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
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt='Crypto Exchange'
                    draggable='false'
                  />
                </div>
                <h1 className='form-title center'>Üye girişi</h1>
                <p className='form-desc center'>
                  Lütfen tarayıcınızın adres çubuğunda{' '}
                  <strong>https://pro.cryptoexchange.com</strong> yazdığından emin olunuz.
                </p>
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='phone'>Telefon numaranız</label>
                        <FormInput
                          type='text'
                          name='phone'
                          onChange={handleChange}
                          value={formValues.phone}
                          placeholder='Telefon numaranızı girin'
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='password'>Şifreniz</label>
                        <FormInput
                          type='password'
                          name='password'
                          onChange={handleChange}
                          value={formValues.password}
                          placeholder='Şifrenizi girin'
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width right'>
                        <Link to='/members/forgot-password'>Şifremi unuttum</Link>
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='buttons'>
                        <FormButton type='submit' text='Giriş yap' onClick={handleSubmit} />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='center'>
                        <p>
                          Hesabınız yoksa <Link to='/members/signup'>yeni hesap</Link> oluşturun.
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
