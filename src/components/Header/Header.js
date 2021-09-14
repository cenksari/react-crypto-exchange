import { memo } from 'react';
import PropTypes from 'prop-types';

import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = memo(({ icon, title }) => (
  <header className='flex flex-space-between flex-center'>
    <HeaderLeft icon={icon} title={title} />
    <HeaderRight />
  </header>
));

Header.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
