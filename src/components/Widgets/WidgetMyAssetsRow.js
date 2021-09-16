import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

const WidgetMyAssetsRow = memo(() => (
  <div className='assets-row flex flex-center flex-space-between'>
    <div>
      <div className='icon' />
    </div>
    <div>
      <strong>Bitcoin</strong>
      <span>BTC</span>
    </div>
    <div className='bar-chart'>
      <Sparklines data={[30, 20, 25, 35, 30]} width={40} height={40}>
        <SparklinesBars style={{ strokeWidth: 1, stroke: '#ffffff', fill: '#32b778' }} />
      </Sparklines>
    </div>
    <div>
      <strong>$18,783.33</strong>
      <span>
        <em className='green'>45%</em>
        Bu hafta
      </span>
    </div>
    <div className='line-chart'>
      <Sparklines
        data={[5, 10, 5, 20, 8, 15, 22, 8, 12, 8, 32, 16, 29, 20, 16, 30, 42, 45]}
        width={200}
        height={50}
      >
        <SparklinesLine style={{ strokeWidth: 4 }} color='#32b778' />
      </Sparklines>
    </div>
    <div>
      <Link to='/'>
        <i className='material-icons'>visibility</i>
      </Link>
      <Link to='/'>
        <i className='material-icons'>receipt</i>
      </Link>
    </div>
  </div>
));

export default WidgetMyAssetsRow;
