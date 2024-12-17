import { useState } from 'react';

import { Link } from 'react-router-dom';

// hooks
import useFormEvents from '../../hooks/useFormEvents';

// components
import Box from '../../components/Common/Box';
import MainLayout from '../../layouts/MainLayout';
import FormInput from '../../components/Forms/FormInput';
import FormButton from '../../components/Forms/FormButton';
import FormCheckbox from '../../components/Forms/FormCheckbox';

// interfaces
interface IFormProps {
  email: string;
  phone: string;
  password: string;
  password1: string;
  name: string;
  lastname: string;
  citizenship: boolean;
  identityType: string;
  identityNumber: string;
  day: string;
  month: string;
  year: string;
  country: string;
  operator: string;
  agreeToPolicies1: boolean;
  agreeToPolicies2: boolean;
  agreeToPolicies3: boolean;
}

const SignupScreen: React.FC = () => {
  const { onlyNumbers, onlyEmail } = useFormEvents();

  const [formValues, setFormValues] = useState<IFormProps>({
    email: '',
    phone: '',
    password: '',
    password1: '',
    name: '',
    lastname: '',
    citizenship: false,
    identityType: '',
    identityNumber: '',
    day: '',
    month: '',
    year: '',
    country: '',
    operator: '',
    agreeToPolicies1: false,
    agreeToPolicies2: false,
    agreeToPolicies3: false,
  });

  /**
   * Handles input changes in the sign-up form.
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
   * Handles checkbox changes in the sign-up form.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The checkbox change event.
   * @returns {void}
   */
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, checked } = e.target;

    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  /**
   * Handles the form submission for the sign-up screen.
   *
   * @param {React.FormEvent} e - The form submission event.
   * @returns {void}
   */
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  return (
    <MainLayout>
      <div className='flex flex-center'>
        <div className='login no-select'>
          <Box>
            <div className='box-vertical-padding box-horizontal-padding'>
              <div>
                <div className='form-logo center'>
                  <img
                    draggable='false'
                    alt='Crypto Exchange'
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                  />
                </div>
                <h1 className='form-title center'>Hesap oluşturma</h1>
                <p className='form-desc center'>
                  Lütfen aşağıdaki bilgileri girin. Aktivasyon bilgilerinizi telefon numaranıza
                  göndereceğiz.
                </p>
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='email'>E-posta adresiniz</label>
                        <FormInput
                          type='email'
                          name='email'
                          onKeyDown={onlyEmail}
                          onChange={handleChange}
                          value={formValues.email}
                          placeholder='E-posta adresinizi girin'
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
                      <div className='full-width'>
                        <label htmlFor='password1'>Şifrenizi doğrulayın</label>
                        <FormInput
                          type='password'
                          name='password1'
                          onChange={handleChange}
                          value={formValues.password1}
                          placeholder='Şifrenizi tekrar girin'
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='name'>Adınız</label>
                        <FormInput
                          type='text'
                          name='name'
                          onChange={handleChange}
                          value={formValues.name}
                          placeholder='Adınızı girin'
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='lastname'>Soyadınız</label>
                        <FormInput
                          type='text'
                          name='lastname'
                          onChange={handleChange}
                          value={formValues.lastname}
                          placeholder='Soyadınızı girin'
                        />
                      </div>
                    </div>

                    <div className='form-line'>
                      <div className='full-width'>
                        <FormCheckbox
                          name='citizenship'
                          onChange={handleCheckboxChange}
                          checked={formValues.citizenship}
                          text='Türkiye Cumhuriyeti vatandaşıyım.'
                        />
                      </div>
                    </div>

                    <div className='form-line clearfix'>
                      <div className='half-width'>
                        <label htmlFor='identityType'>Kimlik tipi</label>
                        <select name='identityType' id='identityType'>
                          <option value='1'>TC kimlik no</option>
                        </select>
                      </div>
                      <div className='half-width'>
                        <label htmlFor='identityNumber'>Kimlik numarası</label>
                        <FormInput
                          type='text'
                          name='identityNumber'
                          onKeyDown={onlyNumbers}
                          onChange={handleChange}
                          value={formValues.identityNumber}
                          placeholder='Kimlik numaranızı girin'
                        />
                      </div>
                    </div>

                    <div className='form-line clearfix'>
                      <div className='three-width'>
                        <label htmlFor='day'>Doğum tarihi</label>
                        <select name='day' id='day'>
                          <option value='1'>Gün</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='month'>&nbsp;</label>
                        <select name='month' id='month'>
                          <option value='1'>Ay</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='year'>&nbsp;</label>
                        <select name='year' id='year'>
                          <option value='1'>Yıl</option>
                        </select>
                      </div>
                    </div>

                    <div className='form-line clearfix'>
                      <div className='three-width'>
                        <label htmlFor='country'>Telefon</label>
                        <select name='country' id='country'>
                          <option value='1'>Ülke kodu</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='operator'>&nbsp;</label>
                        <select name='operator' id='operator'>
                          <option value='1'>Operatör kodu</option>
                        </select>
                      </div>
                      <div className='three-width'>
                        <label htmlFor='phone'>&nbsp;</label>
                        <FormInput
                          type='text'
                          name='phone'
                          onKeyDown={onlyNumbers}
                          onChange={handleChange}
                          value={formValues.phone}
                          placeholder='Telefon numaranızı girin'
                        />
                      </div>
                    </div>

                    <div className='form-line'>
                      <div className='full-width'>
                        <FormCheckbox
                          name='agreeToPolicies1'
                          onChange={handleCheckboxChange}
                          checked={formValues.agreeToPolicies1}
                          text={`KVVK Aydınlatma Metni'ni okudum ve kullanıcı sözleşmesini kabul ediyorum.`}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <FormCheckbox
                          name='agreeToPolicies2'
                          onChange={handleCheckboxChange}
                          checked={formValues.agreeToPolicies2}
                          text={`KVVK Açık Rıza Metni'ni okudum, inceledim. Bu metin kapsamında kişisel verilerimin işlenmesi ve aktarılmasını onaylıyorum.`}
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='full-width'>
                        <FormCheckbox
                          name='agreeToPolicies3'
                          onChange={handleCheckboxChange}
                          checked={formValues.agreeToPolicies3}
                          text='Ürün ve hizmetlerle ilgili KVVK Aydınlatma Metni kapsamında e-posta, telefon ve elektronik iletişim kanalları yoluyla ticari elektronik iletiler almayı kabul ediyorum.'
                        />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='buttons'>
                        <FormButton type='submit' text='Hesap oluştur' onClick={handleSubmit} />
                      </div>
                    </div>
                    <div className='form-line'>
                      <div className='center'>
                        <p>
                          Hesabınız var mı? <Link to='/'>giriş yapın</Link>.
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

export default SignupScreen;
