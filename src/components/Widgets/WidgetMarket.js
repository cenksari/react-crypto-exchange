import { memo } from 'react';

import { Link } from 'react-router-dom';

import Box from '../Common/Box';
import WidgetMarketRow from './WidgetMarketRow';

const WidgetMarket = memo(() => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>Piyasalar</div>
    <div className='box-content'>
      <WidgetMarketRow />

      <WidgetMarketRow />

      <WidgetMarketRow />

      <WidgetMarketRow />

      <WidgetMarketRow />

      <WidgetMarketRow />

      <WidgetMarketRow />

      <WidgetMarketRow />

      <div className='box-button box-vertical-padding box-horizontal-padding'>
        <Link to='/market' className='button button-purple button-medium button-block'>
          Daha fazla
          <i className='material-icons button-icon-right'>chevron_right</i>
        </Link>
      </div>
    </div>
  </Box>
));

export default WidgetMarket;
