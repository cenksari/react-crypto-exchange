import { memo } from 'react';
import PropTypes from 'prop-types';

const HeaderLeft = memo(({ icon, title }) => (
  <div className='header-left nowrap no-select'>
    <i className='material-icons'>{icon}</i>
    <h1>{title}</h1>
  </div>
));

HeaderLeft.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HeaderLeft;
