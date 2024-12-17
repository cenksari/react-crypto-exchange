import { useRef, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

// hooks
import useClickOutside from '../../../hooks/useClickOutside';

// components
import Box from '../../Common/Box';
import MyAssetsRow from './MyAssetsRow';

// interfaces
interface ICrypto {
  id: number;
  name: string;
  icon: string;
  symbol: string;
  amount: string;
  change: string;
  status: number;
  currency: string;
  changePeriod: string;
  barChartData: number[];
  lineChartData: number[];
}

// variables
const dataArray: ICrypto[] = [
  {
    id: 1,
    name: 'Bitcoin',
    symbol: 'BTC',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-BTC-icon.png',
    amount: '18.783,33',
    currency: 'TRY',
    change: '%45',
    changePeriod: 'Bu hafta',
    barChartData: [30, 20, 25, 35, 30],
    lineChartData: [5, 10, 5, 20, 8, 15, 22, 8, 12, 8, 32, 16, 29, 20, 16, 30, 42, 45],
    status: 1,
  },
  {
    id: 2,
    name: 'Etherium',
    symbol: 'ETH',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png',
    amount: '3.125,25',
    currency: 'TRY',
    change: '-%30',
    changePeriod: 'Bu hafta',
    barChartData: [30, 20, 25, 35, 10],
    lineChartData: [5, 10, 5, 20, 8, 15, 22, 8, 12, 8, 32, 16, 29, 20, 16, 30, 42, 10],
    status: 2,
  },
  {
    id: 3,
    name: 'Tether',
    symbol: 'USDT',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Tether-USDT-icon.png',
    amount: '125,12',
    currency: 'TRY',
    change: '%3',
    changePeriod: 'Bu hafta',
    barChartData: [30, 20, 25, 35, 30],
    lineChartData: [5, 10, 5, 20, 8, 15, 22, 8, 12, 8, 32, 16, 29, 20, 16, 30, 42, 43],
    status: 1,
  },
  {
    id: 4,
    name: 'Ripple',
    symbol: 'XRP',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ripple-XRP-icon.png',
    amount: '10,05',
    currency: 'TRY',
    change: '%16',
    changePeriod: 'Bu hafta',
    barChartData: [30, 20, 25, 35, 30],
    lineChartData: [5, 10, 5, 20, 8, 15, 22, 8, 12, 8, 32, 16, 29, 20, 16, 30, 42, 44],
    status: 1,
  },
  {
    id: 5,
    name: 'Polkadot',
    symbol: 'DOT',
    icon: 'data:image/png;base64,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',
    amount: '3,05',
    currency: 'TRY',
    change: '-%3',
    changePeriod: 'Bu hafta',
    barChartData: [30, 20, 25, 35, 20],
    lineChartData: [5, 10, 5, 20, 8, 15, 22, 8, 12, 8, 32, 16, 29, 20, 16, 30, 42, 30],
    status: 2,
  },
  {
    id: 6,
    name: 'Dogecoin',
    symbol: 'DOGE',
    icon: 'https://www.kindpng.com/picc/m/202-2028344_dogecoin-doge-icon-metro-symbole-hd-png-download.png',
    amount: '1,05',
    currency: 'TRY',
    change: '-%6',
    changePeriod: 'Bu hafta',
    barChartData: [30, 20, 25, 35, 25],
    lineChartData: [5, 10, 5, 20, 8, 15, 22, 8, 12, 8, 32, 16, 29, 20, 16, 30, 42, 40],
    status: 2,
  },
  {
    id: 7,
    name: 'Cardano',
    symbol: 'ADA',
    icon: 'https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png',
    amount: '10,12',
    currency: 'TRY',
    change: '%6',
    changePeriod: 'Bu hafta',
    barChartData: [30, 20, 25, 35, 25],
    lineChartData: [5, 10, 5, 20, 8, 15, 22, 8, 12, 8, 32, 16, 29, 20, 16, 30, 42, 40],
    status: 1,
  },
];

const MyAssets: React.FC = () => {
  const ref = useRef<any>(null);

  const [data, setData] = useState<ICrypto[]>([]);
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  useClickOutside(ref, () => setMenuOpened(false));

  useEffect(() => {
    setData(dataArray);
  }, []);

  /**
   * Toggles the state of the menu to open or close.
   */
  const handleMenuOpen = (): void => {
    setMenuOpened(!menuOpened);
  };

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <p>Kripto değerlerim</p>
          <div ref={ref}>
            <Link to='/' type='button' className='button button-purple button-small'>
              Kripto al
            </Link>
            <button type='button' className='box-icon pointer' onClick={() => handleMenuOpen()}>
              <i className='material-icons'>more_vert</i>
            </button>

            {menuOpened && (
              <div className='box-dropdown'>
                <ul>
                  <li>
                    <button type='button'>
                      <i className='material-icons'>settings</i>
                      Button 1
                    </button>
                  </li>
                  <li>
                    <button type='button'>
                      <i className='material-icons'>favorite</i>
                      Button 2
                    </button>
                  </li>
                  <li>
                    <button type='button'>
                      <i className='material-icons'>info</i>
                      Button 3
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='box-content box-content-height-nobutton'>
        {data && data.map((item) => <MyAssetsRow key={item.id.toString()} item={item} />)}
      </div>
    </Box>
  );
};

export default MyAssets;
