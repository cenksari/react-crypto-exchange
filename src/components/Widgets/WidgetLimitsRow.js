import { memo } from 'react';

const WidgetLimitsRow = memo(() => (
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
      <span className='green'>Limit uygun</span>
    </div>
  </div>
));

export default WidgetLimitsRow;
