import { useState, useEffect } from 'react';

// components
import Box from '../../Common/Box';
import LimitsRow from './LimitsRow';

// interfaces
interface ICrypto {
  id: number;
  icon: string;
  status: number;
  currency: string;
  limit24h: string;
  limit30d: string;
}

// variables
const dataArray: ICrypto[] = [
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
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-BTC-icon.png',
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

const Limits: React.FC = () => {
  const [data, setData] = useState<ICrypto[]>([]);

  useEffect(() => {
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
};

export default Limits;
