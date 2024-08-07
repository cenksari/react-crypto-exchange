import React from 'react';

// components
import StatusName from './StatusName';

// interfaces
interface IProps {
  item: any;
}

const LimitsRow = ({ item }: IProps): React.JSX.Element => (
  <div className='limits-row flex flex-center flex-space-between no-select'>
    <div>
      <div className='icon cover' style={{ backgroundImage: `url('${item.icon}')` }} />
      <strong>{item.currency}</strong>
    </div>
    <div className='center'>
      <p>{item.limit24h}</p>
    </div>
    <div className='center'>
      <strong>{item.limit30d}</strong>
    </div>
    <div className='center'>
      <StatusName status={item.status} />
    </div>
  </div>
);

export default LimitsRow;
