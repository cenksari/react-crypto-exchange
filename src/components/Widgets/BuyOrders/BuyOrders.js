import { memo } from 'react';

import Box from '../../Common/Box';
import BuyOrdersRow from './BuyOrdersRow';

const BuyOrders = memo(() => (
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
            <BuyOrdersRow color='green' />

            <BuyOrdersRow color='green' />

            <BuyOrdersRow color='red' />

            <BuyOrdersRow color='white' />

            <BuyOrdersRow color='green' />

            <BuyOrdersRow color='green' />

            <BuyOrdersRow color='white' />

            <BuyOrdersRow color='white' />

            <BuyOrdersRow color='white' />
          </tbody>
        </table>
      </div>
    </div>
  </Box>
));

export default BuyOrders;
