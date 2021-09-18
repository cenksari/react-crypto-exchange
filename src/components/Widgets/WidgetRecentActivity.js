import { memo } from 'react';

import Box from '../Common/Box';
import WidgetRecentActivityRow from './WidgetRecentActivityRow';

const WidgetRecentActivity = memo(() => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
      <div className='flex flex-center flex-space-between'>
        <div>
          <p>Son işlemlerim</p>
        </div>
        <ul>
          <li>
            <button type='button'>Dün</button>
          </li>
          <li>
            <button type='button' className='active'>
              Bugün
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div className='box-content box-content-height-nobutton'>
      <WidgetRecentActivityRow color='green' />

      <WidgetRecentActivityRow color='green' />

      <WidgetRecentActivityRow color='red' />

      <WidgetRecentActivityRow color='green' />

      <WidgetRecentActivityRow color='green' />

      <WidgetRecentActivityRow color='red' />
    </div>
  </Box>
));

export default WidgetRecentActivity;
