import { memo } from 'react';

import Box from '../Common/Box';

const WidgetBuyOrders = memo(() => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
      <div className='flex flex-center flex-space-between'>
        <p>Alış emirleri</p>
        <button type='button' className='box-icon pointer'>
          <i className='material-icons'>more_vert</i>
        </button>
      </div>
    </div>
    <div className='box-content box-content-height-nobutton'>
      <p>deneme</p>
    </div>
  </Box>
));

export default WidgetBuyOrders;
