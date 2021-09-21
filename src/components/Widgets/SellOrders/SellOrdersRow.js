import { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SellOrdersRow = memo(({ item }) => {
  const [color, setColor] = useState('white');

  useEffect(() => {
    if (item.type === 1) {
      setColor('green');
    } else if (item.type === 2) {
      setColor('red');
    }
  }, []);

  return (
    <tr className={color}>
      <td className='left'>
        {item.price} {item.currency}
      </td>
      <td className='center'>
        {item.amount} {item.currency}
      </td>
      <td className='right'>
        {item.total} {item.currency}
      </td>
    </tr>
  );
});

SellOrdersRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default SellOrdersRow;
