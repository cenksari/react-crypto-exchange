import { memo } from 'react';

import Box from '../../Common/Box';
import SellOrdersRow from './SellOrdersRow';

const SellOrders = memo(() => (
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
            <SellOrdersRow color='white' />

            <SellOrdersRow color='green' />

            <SellOrdersRow color='white' />

            <SellOrdersRow color='red' />

            <SellOrdersRow color='green' />

            <SellOrdersRow color='green' />

            <SellOrdersRow color='white' />

            <SellOrdersRow color='white' />

            <SellOrdersRow color='white' />
          </tbody>
        </table>
      </div>
    </div>
  </Box>
));

export default SellOrders;
