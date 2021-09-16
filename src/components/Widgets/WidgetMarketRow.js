import { memo } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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
      <Sparklines data={[5, 10, 5, 20, 10]} width={50} height={50}>
        <SparklinesLine style={{ strokeWidth: 2, fill: 'none' }} color='#32b778' />
      </Sparklines>
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
