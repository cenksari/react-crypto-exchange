import { useState, useEffect } from 'react';

import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';
import TransactionRow from '../../components/Tables/Transactions/TransactionRow';

const TransactionsScreen = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        type: 1,
        transaction: '12415346563475',
        date: '2/5/2020 06:24:45',
        from: 'Tarık',
        to: 'Cenk',
        toPicture:
          'https://lh3.googleusercontent.com/proxy/70CmgghIIVNeYzBnv-fjKkeAKnR1SDkPJJ22oyr2aBYisbr4VSij5HRuQrncxla71blLv0mG307_KsyHIvy1MVKgAg',
        coin: 'Bitcoin',
        icon: 'https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png',
        amount: '5.553',
        status: 1,
      },
      {
        id: 2,
        type: 1,
        transaction: '12453465987451',
        date: '3/5/2020 18:35:12',
        from: 'Tarık',
        to: 'Cenk',
        toPicture:
          'https://lh3.googleusercontent.com/proxy/70CmgghIIVNeYzBnv-fjKkeAKnR1SDkPJJ22oyr2aBYisbr4VSij5HRuQrncxla71blLv0mG307_KsyHIvy1MVKgAg',
        coin: 'Etherium',
        icon: 'https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Ethereum-ETH-icon.png',
        amount: '3.000',
        status: 2,
      },
      {
        id: 3,
        type: 2,
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

  return (
    <SiteLayout>
      <Header icon='sort' title='İşlemler' />
      <div className='top-buttons flex flex-destroy flex-center flex-space-between'>
        <div>
          <div className='top-search nowrap'>
            <input type='text' id='search' name='search' placeholder='Aranacak kelime' />
            <button type='button' className='pointer'>
              <i className='material-icons'>search</i>
            </button>
          </div>
        </div>
        <div>
          <button type='button' className='button button-white button-large'>
            <i className='material-icons button-icon-left'>event</i>
            Periyod
            <i className='material-icons button-icon-right'>keyboard_arrow_down</i>
          </button>
          <button type='button' className='button button-purple button-large'>
            <i className='material-icons button-icon-left'>download</i>
            CSV indir
          </button>
        </div>
      </div>

      {data && data.length > 0 && (
        <table className='data-table'>
          <thead>
            <tr>
              <th className='left'>&nbsp;</th>
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
