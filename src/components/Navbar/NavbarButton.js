import { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavbarButton = memo(({ url, icon, title }) => (
  <Link to={url}>
    <i className='material-icons'>{icon}</i>
    <span>{title}</span>
  </Link>
));

NavbarButton.propTypes = {
  url: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NavbarButton;
