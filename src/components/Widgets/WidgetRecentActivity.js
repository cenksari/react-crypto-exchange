import { memo, useState, useEffect } from 'react';

import Box from '../Common/Box';
import WidgetRecentActivityRow from './WidgetRecentActivityRow';

const WidgetRecentActivity = memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        type: 1,
        time: '06:25:57',
        amount: '+212,50',
        status: 1,
      },
      {
        id: 2,
        type: 1,
        time: '08:30:25',
        amount: '+1465,85',
        status: 1,
      },
      {
        id: 3,
        type: 2,
        time: '09:16:11',
        amount: '-6000,00',
        status: 2,
      },
      {
        id: 4,
        type: 1,
        time: '12:05:03',
        amount: '+2225,35',
        status: 1,
      },
      {
        id: 5,
        type: 1,
        time: '14:46:53',
        amount: '+128,01',
        status: 3,
      },
      {
        id: 6,
        type: 2,
        time: '18:01:03',
        amount: '-350,00',
        status: 2,
      },
    ];

    setData(dataArray);
  }, []);

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <div>
            <p>Son işlemlerim</p>
          </div>
          <ul>
            <li>
              <button type='button'>Dün</button>
            </li>
            <li>
              <button type='button' className='active'>
                Bugün
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className='box-content box-content-height-nobutton'>
        {data &&
          data.map((item) => <WidgetRecentActivityRow key={item.id.toString()} item={item} />)}
      </div>
    </Box>
  );
});

export default WidgetRecentActivity;
