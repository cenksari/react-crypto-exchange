import { useState, useEffect } from 'react';

import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';
import TopBar from '../../components/Tables/TopBar/TopBar';
import TransactionRow from '../../components/Tables/Transactions/TransactionRow';

const TransactionsScreen = () => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        type: 2,
        transaction: '12415346563475',
        date: '2/5/2020 06:24:45',
        from: 'Tarık',
        to: 'Cenk',
        toPicture: 'https://www.cenksari.com/content/profile.jpg',
        coin: 'Bitcoin',
        icon: 'https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png',
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

    setData(dataArray);
  }, []);

  const handleSearchValue = (e) => {
    const { value } = e.target;

    setKeyword(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SiteLayout>
      <Header icon='sort' title='İşlemler' />
      <TopBar
        searchValue={keyword}
        searchOnChange={handleSearchValue}
        searchSubmit={handleSearchSubmit}
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
            {data.map((item) => (
              <TransactionRow key={item.id.toString()} item={item} />
            ))}
          </tbody>
        </table>
      )}
    </SiteLayout>
  );
};

export default TransactionsScreen;
