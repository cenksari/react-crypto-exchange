import { memo, useState, useEffect } from 'react';

import Box from '../../Common/Box';
import LimitsRow from './LimitsRow';

const Limits = memo(() => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        currency: 'Cardano',
        icon: 'https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png',
        limit24h: '65.000',
        limit30d: '163,00',
        status: 1,
      },
      {
        id: 2,
        currency: 'Bitcoin',
        icon: 'https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png',
        limit24h: '12.000',
        limit30d: '5.157,00',
        status: 2,
      },
      {
        id: 3,
        currency: 'Etherium',
        icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png',
        limit24h: '5.000',
        limit30d: '63,00',
        status: 1,
      },
      {
        id: 4,
        currency: 'Ripple',
        icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ripple-XRP-icon.png',
        limit24h: '1.000',
        limit30d: '7.500,00',
        status: 1,
      },
      {
        id: 5,
        currency: 'Dogecoin',
        icon: 'https://www.kindpng.com/picc/m/202-2028344_dogecoin-doge-icon-metro-symbole-hd-png-download.png',
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

        {data && data.map((item) => <LimitsRow key={item.id.toString()} item={item} />)}
      </div>
    </Box>
  );
});

export default Limits;
