import { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '../Common/Box';

const WidgetCoinVertical = memo(({ item }) => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
      <div className='flex flex-center flex-space-between'>
        <p>Hakkında</p>
        <button type='button' className='box-icon pointer'>
          <i className='material-icons'>more_vert</i>
        </button>
      </div>
    </div>
    <div className='widget-coin-vertical box-content-height-nobutton'>
      <div className='center'>
        <div
          className='icon cover'
          style={{
            backgroundImage: `url('${item.icon}')`,
          }}
        />
      </div>
      <div>
        <div className='center'>
          <h3>{item.name}</h3>
          <strong>{item.symbol}</strong>
          <div className='coin-price no-select'>
            1 {item.symbol} = {item.amount} {item.currency}
          </div>
        </div>
        <div className='box-horizontal-padding box-vertical-padding'>
          <p>{item.description}...</p>
          <button type='button' className='pointer'>
            Devamı....
          </button>
        </div>
      </div>
    </div>
  </Box>
));

WidgetCoinVertical.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default WidgetCoinVertical;
