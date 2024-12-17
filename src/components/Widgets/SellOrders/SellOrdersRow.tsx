import { useState, useEffect } from 'react';

// interfaces
interface IProps {
  item: any;
}

const SellOrdersRow: React.FC<IProps> = ({ item }) => {
  const [color, setColor] = useState<string>('white');

  useEffect(() => {
    if (item.type === 1) {
      setColor('green');
    } else if (item.type === 2) {
      setColor('red');
    }
  }, [item.type]);

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
};

export default SellOrdersRow;
