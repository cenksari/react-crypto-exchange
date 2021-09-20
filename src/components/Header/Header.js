import { memo } from 'react';
import PropTypes from 'prop-types';

import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = memo(({ icon, title }) => (
  <header className='flex flex-center flex-space-between'>
    <HeaderLeft icon={icon} title={title} />
    <HeaderRight />
  </header>
));

Header.defaultProps = {
  icon: null,
};

Header.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Header;
