import { useRef, useState, useEffect } from 'react';

// hooks
import useClickOutside from '../../../hooks/useClickOutside';

// components
import Box from '../../Common/Box';
import TradeHistoryRow from './TradeHistoryRow';

// interfaces
interface IHistory {
  id: number;
  type: number;
  time: string;
  weight: number;
  amount: string;
  currency: string;
}

// variables
const dataArray: IHistory[] = [
  {
    id: 1,
    amount: '146,70',
    currency: 'TRY',
    weight: 10,
    time: '06:22:15',
    type: 1,
  },
  {
    id: 2,
    amount: '146,70',
    currency: 'TRY',
    weight: 10,
    time: '07:30:30',
    type: 1,
  },
  {
    id: 3,
    amount: '146,70',
    currency: 'TRY',
    weight: 10,
    time: '09:15:42',
    type: 2,
  },
  {
    id: 4,
    amount: '146,70',
    currency: 'TRY',
    weight: 10,
    time: '11:12:50',
    type: 2,
  },
  {
    id: 5,
    amount: '146,70',
    currency: 'TRY',
    weight: 10,
    time: '13:30:01',
    type: 1,
  },
  {
    id: 6,
    amount: '146,70',
    currency: 'TRY',
    weight: 10,
    time: '14:20:36',
    type: 1,
  },
  {
    id: 7,
    amount: '146,70',
    currency: 'TRY',
    weight: 10,
    time: '17:45:58',
    type: 1,
  },
  {
    id: 8,
    amount: '146,70',
    currency: 'TRY',
    weight: 10,
    time: '20:05:54',
    type: 1,
  },
  {
    id: 9,
    amount: '146,70',
    currency: 'TRY',
    weight: 10,
    time: '22:30:45',
    type: 2,
  },
];

const TradeHistory: React.FC = () => {
  const ref = useRef<any>(null);

  const [data, setData] = useState<IHistory[]>([]);
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
          Piyasa geçmişi
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
        <div className='trade-history-row'>
          {data && data.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th className='left no-select'>Fiyat</th>
                  <th className='center no-select'>Hacim</th>
                  <th className='center no-select'>İşlem</th>
                  <th className='right no-select'>Zaman</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: IHistory) => (
                  <TradeHistoryRow key={item.id.toString()} item={item} />
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Box>
  );
};

export default TradeHistory;
