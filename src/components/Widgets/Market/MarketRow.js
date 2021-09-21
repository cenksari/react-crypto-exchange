import { memo, useState, useEffect } from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import PropTypes from 'prop-types';

const MarketRow = memo(({ item }) => {
  const [color, setColor] = useState('');

  useEffect(() => {
    if (item.status === 1) {
      setColor('green');
    } else {
      setColor('red');
    }
  }, []);

  return (
    <div className='market-row flex flex-center flex-space-between'>
      <div>
        <div className='icon cover' style={{ backgroundImage: `url('${item.icon}')` }} />
      </div>
      <div>
        <p>
          <strong>{item.name}</strong>
          <span className='gray'>{item.date}</span>
        </p>
      </div>
      <div>
        <Sparklines data={item.lineChartData} width={50} height={50}>
          <SparklinesLine style={{ strokeWidth: 2, fill: 'none' }} color={color} />
        </Sparklines>
      </div>
      <div>
        <p className='right'>
          <strong>
            {item.amount} {item.currency}
          </strong>
          <span className={color}>{item.change}</span>
        </p>
      </div>
    </div>
  );
});

MarketRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default MarketRow;
