import { memo } from 'react';

import NavbarButton from './NavbarButton';

const Navbar = memo(() => (
  <nav className='navbar-inner no-select'>
    <h3>Main menu</h3>
    <ul>
      <li>
        <NavbarButton url='/' icon='dashboard' title='Dashboard' />
      </li>
      <li>
        <NavbarButton url='/' icon='account_balance_wallet' title='My wallet' />
      </li>
      <li>
        <NavbarButton url='/' icon='sync' title='Transactions' />
      </li>
      <li>
        <NavbarButton url='/' icon='paid' title='Trading' />
      </li>
      <li>
        <NavbarButton url='/' icon='account_balance' title='Exchange' />
      </li>
      <li>
        <NavbarButton url='/' icon='equalizer' title='Market capital' />
      </li>
    </ul>
    <h3>Others</h3>
    <ul>
      <li>
        <NavbarButton url='/' icon='contacts' title='Contacts' />
      </li>
      <li>
        <NavbarButton url='/' icon='chat' title='Messages' />
      </li>
      <li>
        <NavbarButton url='/' icon='settings' title='Settings' />
      </li>
    </ul>
    <div className='copyright'>
      <strong>BTClever</strong>
      <p>
        2021 &copy; All rights reserved.
        <br />
        <br />
        Made with <span>❤</span> by Btclever
      </p>
    </div>
  </nav>
));

export default Navbar;
