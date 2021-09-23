import { memo } from 'react';
import PropTypes from 'prop-types';

const Status = memo(({ status }) => {
  if (status === 1) {
    return <span className='status green'>BİTMİŞ</span>;
  }

  if (status === 2) {
    return <span className='status red'>İPTAL</span>;
  }

  return <span className='status gray'>BEKLİYOR</span>;
});

Status.propTypes = {
  status: PropTypes.number.isRequired,
};

export default Status;
