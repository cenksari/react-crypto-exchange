import { memo } from 'react';
import PropTypes from 'prop-types';

const TradeHistoryRow = memo(({ color }) => (
  <tr className={color}>
    <td className='left'>146,70</td>
    <td className='center'>10</td>
    <td className='center'>ALIŞ</td>
    <td className='right'>21:22:15</td>
  </tr>
));

TradeHistoryRow.propTypes = {
  color: PropTypes.string.isRequired,
};

export default TradeHistoryRow;
