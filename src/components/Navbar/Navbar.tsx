import { Link } from 'react-router-dom';

// components
import NavbarButton from './NavbarButton';

const Navbar: React.FC = () => (
  <nav className='navbar-inner no-select'>
    <div className='logo'>
      <Link to='/market'>
        <img
          draggable='false'
          alt='Crypto Exchange'
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
        />
      </Link>
    </div>
    <h3>Main menu</h3>
    <ul>
      <li>
        <NavbarButton url='/capital' icon='equalizer' title='Capital' />
      </li>
      <li>
        <NavbarButton url='/wallet' icon='account_balance_wallet' title='My wallet' />
      </li>
      <li>
        <NavbarButton url='/transactions' icon='sync' title='Transactions' />
      </li>
      <li>
        <NavbarButton url='/dashboard' icon='dashboard' title='Deposit / Withdraw' />
      </li>
    </ul>
    <h3>Others</h3>
    <ul>
      <li>
        <NavbarButton url='/members' icon='account_circle' title='My profile' />
      </li>
      <li>
        <NavbarButton url='/contacts' icon='contacts' title='Addresses' />
      </li>
      <li>
        <NavbarButton url='/messages' icon='chat' title='Messages' />
      </li>
      <li>
        <NavbarButton url='/settings' icon='settings' title='Settings' />
      </li>
    </ul>
    <div className='copyright'>
      <strong>Crypto Exchange</strong>
      <p>
        {new Date().getFullYear()} &copy; All rights reserved.
        <br />
        <br />
        Made with <span>❤</span> by{' '}
        <a target='_blank' rel='noreferrer' href='https://www.cenksari.com'>
          Cenk SARI
        </a>
      </p>
    </div>
  </nav>
);

export default Navbar;
