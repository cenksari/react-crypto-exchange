import { memo } from 'react';
import PropTypes from 'prop-types';

const StatusName = memo(({ status }) => {
  if (status === 1) {
    return <span className='green'>Limit uygun</span>;
  }

  return <span className='red'>Bakiye yetersiz</span>;
});

StatusName.propTypes = {
  status: PropTypes.number.isRequired,
};

export default StatusName;
