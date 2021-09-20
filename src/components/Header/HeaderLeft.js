import { memo } from 'react';
import PropTypes from 'prop-types';

const HeaderLeft = memo(({ icon, title }) => (
  <div className='header-left nowrap no-select'>
    {icon && <i className='material-icons'>{icon}</i>}
    <h1 className='responsive-hide'>{title}</h1>
  </div>
));

HeaderLeft.defaultProps = {
  icon: null,
};

HeaderLeft.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default HeaderLeft;
