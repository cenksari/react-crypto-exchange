import { Link } from 'react-router-dom';

const NotFoundScreen = () => (
  <div className='full-height flex flex-column flex-center'>
    <img src='/images/btclever-logo.png' alt='BTClever' className='logo-404' />
    <h1 className='title-404'>404 Not found</h1>
    <p className='paragraph-404'>Resource not found on BTClever server.</p>
    <Link to='/market' className='button button-purple button-medium'>
      Go to market page
    </Link>
  </div>
);

export default NotFoundScreen;
