import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header/Header';

import WidgetMarket from '../../components/Widgets/WidgetMarket';
import WidgetBuySell from '../../components/Widgets/WidgetBuySell';
import WidgetBuyOrders from '../../components/Widgets/WidgetBuyOrders';
import WidgetSellOrders from '../../components/Widgets/WidgetSellOrders';
import WidgetTradeHistory from '../../components/Widgets/WidgetTradeHistory';
import WidgetCoinVertical from '../../components/Widgets/WidgetCoinVertical';
import WidgetCoinHorizontal from '../../components/Widgets/WidgetCoinHorizontal';

const MarketScreen = () => (
  <MainLayout>
    <div className='content'>
      <Header title='Market' />
      <div className='flex'>
        <div className='content-30 box-right-padding'>
          <WidgetMarket />

          <WidgetCoinVertical />
        </div>
        <div className='content-70 flex-1'>
          <WidgetCoinHorizontal />

          <div className='flex'>
            <div className='content-70 flex-1 box-right-padding'>
              <WidgetTradeHistory />
            </div>
            <div className='content-30'>
              <WidgetBuySell />
            </div>
          </div>

          <div className='flex flex-space-between'>
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

export default MarketScreen;
