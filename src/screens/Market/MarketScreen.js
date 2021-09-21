import { useState, useEffect } from 'react';

import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header/Header';

import WidgetMarket from '../../components/Widgets/WidgetMarket';
import WidgetBuySell from '../../components/Widgets/WidgetBuySell';
import WidgetBuyOrders from '../../components/Widgets/WidgetBuyOrders';
import WidgetSellOrders from '../../components/Widgets/WidgetSellOrders';
import WidgetTradeHistory from '../../components/Widgets/WidgetTradeHistory';
import WidgetCoinVertical from '../../components/Widgets/WidgetCoinVertical';
import WidgetCoinHorizontal from '../../components/Widgets/WidgetCoinHorizontal';

const MarketScreen = () => {
  const [coinInfo, setCoinInfo] = useState(null);

  useEffect(() => {
    const coinData = {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      change: '%-3.28',
      currency: 'TRY',
      exchange: 'BTC/USD',
      weight: '104k',
      financialRate: '-0.0252%/hr',
      icon: 'https://icons-for-free.com/iconfiles/png/512/btc+coin+crypto+icon-1320162856490699468.png',
      amount: '18.783.33',
      description: `Bitcoin, Satoshi Nakamoto adını kullanmış bilinmeyen bir kişi veya grup tarafından 2008'de icat edilmiş bir kriptoparadır. 2009'da bir açık kaynak kodlu yazılım olarak piyasaya`,
    };

    setCoinInfo(coinData);
  }, []);

  return (
    <MainLayout>
      <div className='content'>
        <Header title='Market' />
        <div className='flex flex-destroy'>
          <div className='content-30 box-right-padding'>
            <WidgetMarket />

            {coinInfo && <WidgetCoinVertical item={coinInfo} />}
          </div>
          <div className='content-70 flex-1'>
            {coinInfo && <WidgetCoinHorizontal item={coinInfo} />}

            <div className='flex flex-destroy'>
              <div className='content-70 flex-1 box-right-padding'>
                <WidgetTradeHistory />
              </div>
              <div className='content-30'>
                <WidgetBuySell />
              </div>
            </div>

            <div className='flex flex-destroy flex-space-between'>
              <div className='flex-1 box-right-padding'>
                <WidgetTradeHistory />
              </div>
              <div className='flex-1 box-right-padding'>
                <WidgetBuyOrders />
              </div>
              <div className='flex-1'>
                <WidgetSellOrders />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MarketScreen;
