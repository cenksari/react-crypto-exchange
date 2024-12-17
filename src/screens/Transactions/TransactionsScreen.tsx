import { useState, useEffect } from 'react';

// components
import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';
import TopBar from '../../components/Tables/TopBar/TopBar';
import TransactionRow from '../../components/Tables/Transactions/TransactionRow';

// interfaces
interface ITransaction {
  id: number;
  to: string;
  type: number;
  date: string;
  from: string;
  coin: string;
  icon: string;
  amount: string;
  status: number;
  toPicture: string;
  transaction: string;
}

// variables
const dataArray: ITransaction[] = [
  {
    id: 1,
    type: 2,
    transaction: '12415346563475',
    date: '2/5/2020 06:24:45',
    from: 'Tarık',
    to: 'Cenk',
    toPicture: 'https://www.cenksari.com/content/profile.jpg',
    coin: 'Bitcoin',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/256/Bitcoin-BTC-icon.png',
    amount: '5.553',
    status: 1,
  },
  {
    id: 2,
    type: 2,
    transaction: '12453465987451',
    date: '3/5/2020 18:35:12',
    from: 'Tarık',
    to: 'Cenk',
    toPicture: 'https://www.cenksari.com/content/profile.jpg',
    coin: 'Etherium',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png',
    amount: '3.000',
    status: 2,
  },
  {
    id: 3,
    type: 1,
    transaction: '24153459987415',
    date: '4/5/2020 13:42:01',
    from: 'Cenk',
    to: 'Tarık',
    toPicture: '',
    coin: 'Tether',
    icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Tether-USDT-icon.png',
    amount: '158',
    status: 3,
  },
];

const TransactionsScreen: React.FC = () => {
  const [data, setData] = useState<ITransaction[]>([]);
  const [keyword, setKeyword] = useState<string>('');

  useEffect(() => {
    setData(dataArray);
  }, []);

  /**
   * Handles the search input value change.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The input change event.
   * @returns {void}
   */
  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;

    setKeyword(value);
  };

  /**
   * Handles the search form submission.
   *
   * @param {React.FormEvent} e - The form submission event.
   * @returns {void}
   */
  const handleSearchSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
  };

  return (
    <SiteLayout>
      <Header icon='sort' title='İşlemler' />
      <TopBar
        searchValue={keyword}
        searchSubmit={handleSearchSubmit}
        searchOnChange={handleSearchValue}
      />

      {data && data.length > 0 && (
        <table className='data-table'>
          <thead>
            <tr>
              <th aria-label='empty' className='left'>
                &nbsp;
              </th>
              <th className='left responsive-hide'>İşlem</th>
              <th className='left responsive-hide'>Tarih</th>
              <th className='left'>Kimden</th>
              <th className='left'>Kime</th>
              <th className='left'>Coin</th>
              <th className='center'>Miktar</th>
              <th className='center'>Durum</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item: ITransaction) => (
              <TransactionRow key={item.id.toString()} item={item} />
            ))}
          </tbody>
        </table>
      )}
    </SiteLayout>
  );
};

export default TransactionsScreen;
