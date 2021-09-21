import { memo } from 'react';
import PropTypes from 'prop-types';

const BuyOrdersRow = memo(({ color }) => (
  <tr className={color}>
    <td className='left'>82,3</td>
    <td className='center'>0,15</td>
    <td className='right'>237,31</td>
  </tr>
));

BuyOrdersRow.propTypes = {
  color: PropTypes.string.isRequired,
};

export default BuyOrdersRow;
