import { memo } from 'react';
import PropTypes from 'prop-types';

const Amount = memo(({ type, amount }) => {
  if (type === 1) {
    return <strong className='red'>{amount}</strong>;
  }

  return <strong className='green'>{amount}</strong>;
});

Amount.propTypes = {
  type: PropTypes.number.isRequired,
  amount: PropTypes.string.isRequired,
};

export default Amount;
