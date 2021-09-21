import { memo } from 'react';
import PropTypes from 'prop-types';

import ProcessType from './ProcessType';
import StatusName from './StatusName';

const RecentActivityRow = memo(({ item }) => (
  <div className='activity-row flex flex-center flex-space-between no-select'>
    <ProcessType type={item.type} />
    <div className='center'>
      <p>{item.time}</p>
    </div>
    <div className='center'>
      <strong>
        {item.amount} {item.currency}
      </strong>
    </div>
    <div className='center'>
      <StatusName status={item.status} />
    </div>
  </div>
));

RecentActivityRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default RecentActivityRow;
