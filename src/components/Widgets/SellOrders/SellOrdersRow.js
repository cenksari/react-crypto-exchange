import { memo } from 'react';
import PropTypes from 'prop-types';

const SellOrdersRow = memo(({ color }) => (
  <tr className={color}>
    <td className='left'>82,3</td>
    <td className='center'>0,15</td>
    <td className='right'>237,31</td>
  </tr>
));

SellOrdersRow.propTypes = {
  color: PropTypes.string.isRequired,
};

export default SellOrdersRow;
