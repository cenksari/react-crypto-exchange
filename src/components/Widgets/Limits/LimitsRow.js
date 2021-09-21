import { memo } from 'react';
import PropTypes from 'prop-types';

import StatusName from './StatusName';

const LimitsRow = memo(({ item }) => (
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
));

LimitsRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default LimitsRow;
