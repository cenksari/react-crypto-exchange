import { memo } from 'react';
import PropTypes from 'prop-types';

const HeaderLeft = memo(({ icon, title }) => (
  <div className='header-left nowrap no-select'>
    {icon && (
      <button type='button' className='pointer'>
        <i className='material-icons'>{icon}</i>
      </button>
    )}
    <h1>{title}</h1>
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
