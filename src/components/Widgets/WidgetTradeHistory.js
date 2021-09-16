import { memo } from 'react';

import { Link } from 'react-router-dom';

import Box from '../Common/Box';
import WidgetTradeHistoryRow from './WidgetTradeHistoryRow';

const WidgetTradeHistory = memo(() => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
      Piyasa geçmişi
    </div>
    <div className='box-content box-content-height'>
      <div className='trade-history-row'>
        <table>
          <thead>
            <tr>
              <th className='left'>Fiyat</th>
              <th className='center'>Hacim</th>
              <th className='center'>İşlem</th>
              <th className='right'>Zaman</th>
            </tr>
          </thead>
          <tbody>
            <WidgetTradeHistoryRow color='green' />

            <WidgetTradeHistoryRow color='green' />

            <WidgetTradeHistoryRow color='red' />

            <WidgetTradeHistoryRow color='red' />

            <WidgetTradeHistoryRow color='green' />

            <WidgetTradeHistoryRow color='green' />

            <WidgetTradeHistoryRow color='green' />

            <WidgetTradeHistoryRow color='green' />

            <WidgetTradeHistoryRow color='red' />
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

export default WidgetTradeHistory;
