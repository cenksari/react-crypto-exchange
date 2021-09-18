import { memo } from 'react';
import PropTypes from 'prop-types';

const WidgetLimitsRow = memo(({ color }) => (
  <div className='limits-row flex flex-center flex-space-between no-select'>
    <div>
      <div className='icon' />
      <strong>TRY</strong>
    </div>
    <div className='center'>
      <p>65.000 TL</p>
    </div>
    <div className='center'>
      <strong>9.063,100</strong>
    </div>
    <div className='center'>
      <span className={color}>{color === 'green' ? 'Limit uygun' : 'Bakiye yetersiz'}</span>
    </div>
  </div>
));

WidgetLimitsRow.propTypes = {
  color: PropTypes.string.isRequired,
};

export default WidgetLimitsRow;
