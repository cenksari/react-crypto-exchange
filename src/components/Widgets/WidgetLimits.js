import { memo } from 'react';

import Box from '../Common/Box';
import WidgetLimitsRow from './WidgetLimitsRow';

const WidgetLimits = memo(() => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
      <div className='flex flex-center flex-space-between'>
        <div>
          <p>Limitler</p>
        </div>
        <ul>
          <li>
            <button type='button' className='active'>
              Yatırma
            </button>
          </li>
          <li>
            <button type='button'>Çekme</button>
          </li>
        </ul>
      </div>
    </div>
    <div className='box-content box-content-height-nobutton'>
      <div className='limits-header-row flex flex-center flex-space-between no-select'>
        <div>&nbsp;</div>
        <div className='center'>
          <span className='gray'>24s limit</span>
        </div>
        <div className='center'>
          <span className='gray'>30g limit</span>
        </div>
        <div className='center'>
          <span className='gray'>Durum</span>
        </div>
      </div>

      <WidgetLimitsRow />

      <WidgetLimitsRow />

      <WidgetLimitsRow />

      <WidgetLimitsRow />

      <WidgetLimitsRow />
    </div>
  </Box>
));

export default WidgetLimits;
