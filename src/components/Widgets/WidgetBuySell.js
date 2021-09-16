import { memo } from 'react';

import Box from '../Common/Box';

const WidgetBuySell = memo(() => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
      <div className='flex flex-center flex-space-between'>
        <p>Al-sat</p>
      </div>
    </div>
    <div className='widget-coin-vertical box-content-height-nobutton'>
      <p>deneme</p>
    </div>
  </Box>
));

export default WidgetBuySell;
