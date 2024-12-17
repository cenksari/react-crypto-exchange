import { useRef, useState, useEffect } from 'react';

// hooks
import useClickOutside from '../../../hooks/useClickOutside';

// components
import Box from '../../Common/Box';
import BuyOrdersRow from './BuyOrdersRow';

// interfaces
interface IPriceList {
  id: number;
  type: number;
  price: string;
  total: string;
  amount: string;
  currency: string;
}

// variables
const dataArray: IPriceList[] = [
  {
    id: 1,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'TRY',
    type: 1,
  },
  {
    id: 2,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'TRY',
    type: 1,
  },
  {
    id: 3,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'TRY',
    type: 3,
  },
  {
    id: 4,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'TRY',
    type: 3,
  },
  {
    id: 5,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'TRY',
    type: 2,
  },
  {
    id: 6,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'TRY',
    type: 1,
  },
  {
    id: 7,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'TRY',
    type: 2,
  },
  {
    id: 8,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'TRY',
    type: 3,
  },
  {
    id: 9,
    price: '82,03',
    amount: '0,15',
    total: '237,31',
    currency: 'TRY',
    type: 3,
  },
];

const BuyOrders: React.FC = () => {
  const ref = useRef<any>(null);

  const [data, setData] = useState<IPriceList[]>([]);
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
        <div ref={ref} className='flex flex-center flex-space-between'>
          <p>Alış emirleri</p>
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
      <div className='box-content box-content-height-nobutton'>
        <div className='orders-row'>
          {data && data.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th className='left no-select'>Fiyat</th>
                  <th className='center no-select'>Tutar</th>
                  <th className='right no-select'>Toplam</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: IPriceList) => (
                  <BuyOrdersRow key={item.id.toString()} item={item} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Box>
  );
};

export default BuyOrders;
