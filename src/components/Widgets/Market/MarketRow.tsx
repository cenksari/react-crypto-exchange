import React from 'react';

import { Sparklines, SparklinesLine } from 'react-sparklines';

// interfaces
interface IProps {
  item: any;
}

const MarketRow = ({ item }: IProps): React.JSX.Element => {
  const [color, setColor] = React.useState<string>('');

  React.useEffect(() => {
    if (item.status === 1) {
      setColor('green');
    } else {
      setColor('red');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
};

export default MarketRow;
