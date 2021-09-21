import { memo } from 'react';
import PropTypes from 'prop-types';

const StatusName = memo(({ status }) => {
  if (status === 1) {
    return <span className='green'>Bitmiş</span>;
  }

  if (status === 2) {
    return <span className='red'>Başarısız</span>;
  }

  return <span className='gray'>Bekliyor</span>;
});

StatusName.propTypes = {
  status: PropTypes.number.isRequired,
};

export default StatusName;
