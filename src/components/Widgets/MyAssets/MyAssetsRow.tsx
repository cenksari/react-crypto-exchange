import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

// interface
interface IProps {
  item: any;
}

const MyAssetsRow: React.FC<IProps> = ({ item }) => {
  const [color, setColor] = useState<string>('');

  useEffect(() => {
    if (item.status === 1) {
      setColor('green');
    } else {
      setColor('red');
    }
  }, [item.status]);

  return (
    <div className='assets-row flex flex-center flex-space-between'>
      <div>
        <div className='icon cover' style={{ backgroundImage: `url('${item.icon}')` }} />
      </div>
      <div className='standard-width'>
        <strong>{item.name}</strong>
        <span>{item.symbol}</span>
      </div>
      <div className='bar-chart responsive-hide2'>
        <Sparklines data={item.barChartData} width={40} height={40}>
          <SparklinesBars style={{ strokeWidth: 1, stroke: '#ffffff', fill: color }} />
        </Sparklines>
      </div>
      <div className='standard-width'>
        <strong>
          {item.amount} {item.currency}
        </strong>
        <span>
          <em className={color}>{item.change}</em>
          {item.changePeriod}
        </span>
      </div>
      <div className='line-chart responsive-hide'>
        <Sparklines data={item.lineChartData} width={150} height={50}>
          <SparklinesLine style={{ strokeWidth: 4 }} color={color} />
        </Sparklines>
      </div>
      <div className='nowrap no-select'>
        <Link to='/'>
          <i className='material-icons'>visibility</i>
        </Link>
        <Link to='/'>
          <i className='material-icons'>receipt</i>
        </Link>
      </div>
    </div>
  );
};

export default MyAssetsRow;
