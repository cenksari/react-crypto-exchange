import { memo } from 'react';
import PropTypes from 'prop-types';

const TradeHistoryRow = memo(({ item }) => (
  <tr className={item.type === 1 ? 'green' : 'red'}>
    <td className='left'>
      {item.amount} {item.currency}
    </td>
    <td className='center'>{item.weight}</td>
    <td className='center'>{item.type === 1 ? 'ALIŞ' : 'SATIŞ'}</td>
    <td className='right'>{item.time}</td>
  </tr>
));

TradeHistoryRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default TradeHistoryRow;
