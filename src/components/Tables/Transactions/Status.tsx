import React from 'react';

// interfaces
interface IProps {
  status: number;
}

const Status = ({ status }: IProps): React.JSX.Element => {
  if (status === 1) {
    return <span className='status green'>BİTMİŞ</span>;
  }

  if (status === 2) {
    return <span className='status red'>İPTAL</span>;
  }

  return <span className='status gray'>BEKLİYOR</span>;
};

export default Status;
