import { memo } from 'react';

import { Link } from 'react-router-dom';

import Box from '../Common/Box';
import WidgetMarketRow from './WidgetMarketRow';

const WidgetMarket = memo(() => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>Piyasalar</div>
    <div className='box-content box-content-height'>
      <WidgetMarketRow color='green' />

      <WidgetMarketRow color='green' />

      <WidgetMarketRow color='red' />

      <WidgetMarketRow color='green' />

      <WidgetMarketRow color='green' />

      <WidgetMarketRow color='red' />

      <WidgetMarketRow color='green' />

      <WidgetMarketRow color='red' />
    </div>
    <div className='box-button box-vertical-padding box-horizontal-padding'>
      <Link to='/market' className='button button-purple button-medium button-block'>
        Daha fazla
        <i className='material-icons button-icon-right'>chevron_right</i>
      </Link>
    </div>
  </Box>
));

export default WidgetMarket;
