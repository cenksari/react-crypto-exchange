import { memo } from 'react';

import Box from '../Common/Box';

const WidgetCoinHorizontal = memo(() => (
  <Box>
    <div className='box-content box-vertical-padding box-horizontal-padding'>
      <div className='widget-coin-horizontal flex flex-center flex-space-between nowrap'>
        <div>
          <div className='icon' />
        </div>
        <div>
          <label>Bitcoin</label>
          <strong>BTC/USD</strong>
        </div>
        <div className='divider' />
        <div>
          <label className='gray'>Değer fiyatı</label>
          <strong>
            148.42
            <em className='red'>-3.28%</em>
          </strong>
        </div>
        <div className='divider' />
        <div>
          <label className='gray'>Finansman oranı</label>
          <strong>-0.0252%/hr</strong>
        </div>
        <div className='divider' />
        <div>
          <label className='gray'>Hacim</label>
          <strong>104k</strong>
        </div>
        <div className='divider' />
        <div>
          <input type='text' name='keyword' id='keyword' placeholder='Arama' autoComplete='off' />
          <button type='button' className='pointer'>
            <i className='material-icons'>search</i>
          </button>
        </div>
      </div>
    </div>
  </Box>
));

export default WidgetCoinHorizontal;
