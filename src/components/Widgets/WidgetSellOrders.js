import { memo } from 'react';

import Box from '../Common/Box';
import WidgetSellOrdersRow from './WidgetSellOrdersRow';

const WidgetSellOrders = memo(() => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
      <div className='flex flex-center flex-space-between'>
        <p>Satış emirleri</p>
        <button type='button' className='box-icon pointer'>
          <i className='material-icons'>more_vert</i>
        </button>
      </div>
    </div>
    <div className='box-content box-content-height-nobutton'>
      <div className='orders-row'>
        <table>
          <thead>
            <tr>
              <th className='left no-select'>Fiyat</th>
              <th className='center no-select'>Tutar</th>
              <th className='right no-select'>Toplam</th>
            </tr>
          </thead>
          <tbody>
            <WidgetSellOrdersRow color='white' />

            <WidgetSellOrdersRow color='green' />

            <WidgetSellOrdersRow color='white' />

            <WidgetSellOrdersRow color='red' />

            <WidgetSellOrdersRow color='green' />

            <WidgetSellOrdersRow color='green' />

            <WidgetSellOrdersRow color='white' />

            <WidgetSellOrdersRow color='white' />

            <WidgetSellOrdersRow color='white' />
          </tbody>
        </table>
      </div>
    </div>
  </Box>
));

export default WidgetSellOrders;
