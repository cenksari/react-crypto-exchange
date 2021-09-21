import { memo, useState, useEffect } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import PropTypes from 'prop-types';

const CapitalRow = memo(({ item, index }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    if (item.status === 1) {
      setColor('green');
    } else {
      setColor('red');
    }
  }, []);

  return (
    <tr>
      <td>
        <div className='rank accent'>#{index}</div>
      </td>
      <td className='nowrap'>
        <div className='icon cover' style={{ backgroundImage: `url('${item.icon}')` }} />
        <strong>{item.name}</strong>
      </td>
      <td className='center'>
        <strong>
          {item.amount} {item.currency}
        </strong>
      </td>
      <td className='center'>
        <strong className={color}>{item.change}</strong>
      </td>
      <td className='center responsive-hide2'>{item.weight}</td>
      <td className='responsive-hide'>
        <div className='line-chart'>
          <Sparklines data={item.lineChartData} width={200} height={50}>
            <SparklinesLine style={{ strokeWidth: 4 }} color={color} />
          </Sparklines>
        </div>
      </td>
      <td className='right'>
        <button type='button' className='pointer'>
          <i className='material-icons'>more_vert</i>
        </button>
      </td>
    </tr>
  );
});

CapitalRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default CapitalRow;
