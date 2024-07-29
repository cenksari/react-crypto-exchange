import React from 'react';

// interfaces
interface IProps {
  type: number;
}

const ProcessType = ({ type }: IProps): React.JSX.Element => {
  if (type === 1) {
    return (
      <div className='nowrap'>
        <div className='icon green'>
          <i className='material-icons'>arrow_upward</i>
        </div>
        <strong>Yükleme</strong>
      </div>
    );
  }

  return (
    <div className='nowrap'>
      <div className='icon red'>
        <i className='material-icons'>arrow_downward</i>
      </div>
      <strong>Çekme</strong>
    </div>
  );
};

export default ProcessType;
