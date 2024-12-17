import { Link } from 'react-router-dom';

const NotFoundScreen: React.FC = () => (
  <div className='full-height flex flex-column flex-center'>
    <img
      draggable='false'
      className='logo-404'
      alt='Crypto Exchange'
      src={`${process.env.PUBLIC_URL}/images/logo.png`}
    />
    <h1 className='title-404'>404</h1>
    <p className='paragraph-404'>Crypto Exchange sunucusunda böyle bir sayfa bulunamadı.</p>
    <Link to='/' className='button button-purple button-medium'>
      Ana sayfaya git
    </Link>
  </div>
);

export default NotFoundScreen;
