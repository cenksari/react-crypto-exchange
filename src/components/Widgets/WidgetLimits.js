import { memo, useState, useEffect } from 'react';

import Box from '../Common/Box';
import WidgetLimitsRow from './WidgetLimitsRow';

const WidgetLimits = memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        currency: 'TRY',
        limit24h: '65.000',
        limit30d: '163,00',
        status: 1,
      },
      {
        id: 2,
        currency: 'TRY',
        limit24h: '12.000',
        limit30d: '5.157,00',
        status: 2,
      },
      {
        id: 3,
        currency: 'TRY',
        limit24h: '5.000',
        limit30d: '63,00',
        status: 1,
      },
      {
        id: 4,
        currency: 'TRY',
        limit24h: '1.000',
        limit30d: '7.500,00',
        status: 1,
      },
      {
        id: 5,
        currency: 'TRY',
        limit24h: '100',
        limit30d: '9.063,00',
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
            <p>Limitler</p>
          </div>
          <ul>
            <li>
              <button type='button' className='active'>
                Yatırma
              </button>
            </li>
            <li>
              <button type='button'>Çekme</button>
            </li>
          </ul>
        </div>
      </div>
      <div className='box-content box-content-height-nobutton'>
        <div className='limits-header-row flex flex-center flex-space-between no-select'>
          <div>&nbsp;</div>
          <div className='center'>
            <span className='gray'>24s limit</span>
          </div>
          <div className='center'>
            <span className='gray'>30g limit</span>
          </div>
          <div className='center'>
            <span className='gray'>Durum</span>
          </div>
        </div>

        {data && data.map((item) => <WidgetLimitsRow key={item.id.toString()} item={item} />)}
      </div>
    </Box>
  );
});

export default WidgetLimits;
