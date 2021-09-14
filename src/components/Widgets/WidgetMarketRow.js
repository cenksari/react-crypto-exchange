import { memo } from 'react';

const WidgetMarketRow = memo(() => (
  <div className='market-row flex flex-center flex-space-between'>
    <div>
      <div className='icon' />
    </div>
    <div>
      <p>
        <strong>LTC/USD</strong>
        <span className='gray'>Eylül 2021</span>
      </p>
    </div>
    <div>
      <p>graph</p>
    </div>
    <div>
      <p className='right'>
        <strong>120.45</strong>
        <span className='green'>1.24%</span>
      </p>
    </div>
  </div>
));

export default WidgetMarketRow;
