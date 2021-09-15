import { Link } from 'react-router-dom';

const NotFoundScreen = () => (
  <div className='full-height flex flex-column flex-center'>
    <img src='/images/btclever-logo.png' alt='BTClever' draggable='false' className='logo-404' />
    <h1 className='title-404'>404 Not found</h1>
    <p className='paragraph-404'>Resource not found on BTClever server.</p>
    <Link to='/' className='button button-purple button-medium'>
      Go to home page
    </Link>
  </div>
);

export default NotFoundScreen;
