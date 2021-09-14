import { memo } from 'react';
import PropTypes from 'prop-types';

const FormButton = memo(({ type, text, onClick }) => (
  <button
    type={type === 'submit' ? 'submit' : 'button'}
    className='button button-purple button-medium'
    onClick={onClick}
  >
    {text}
  </button>
));

FormButton.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default FormButton;
