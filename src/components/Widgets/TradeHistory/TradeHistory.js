import { memo } from 'react';

import { Link } from 'react-router-dom';

import Box from '../../Common/Box';
import TradeHistoryRow from './TradeHistoryRow';

const TradeHistory = memo(() => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
      Piyasa geçmişi
    </div>
    <div className='box-content box-content-height'>
      <div className='trade-history-row'>
        <table>
          <thead>
            <tr>
              <th className='left no-select'>Fiyat</th>
              <th className='center no-select'>Hacim</th>
              <th className='center no-select'>İşlem</th>
              <th className='right no-select'>Zaman</th>
            </tr>
          </thead>
          <tbody>
            <TradeHistoryRow color='green' />

            <TradeHistoryRow color='green' />

            <TradeHistoryRow color='red' />

            <TradeHistoryRow color='red' />

            <TradeHistoryRow color='green' />

            <TradeHistoryRow color='green' />

            <TradeHistoryRow color='green' />

            <TradeHistoryRow color='green' />

            <TradeHistoryRow color='red' />
          </tbody>
        </table>
      </div>
    </div>
    <div className='box-button box-vertical-padding box-horizontal-padding'>
      <Link to='/market' className='button button-purple button-medium button-block'>
        Daha fazla
        <i className='material-icons button-icon-right'>chevron_right</i>
      </Link>
    </div>
  </Box>
));

export default TradeHistory;
