import MainLayout from '../../layouts/MainLayout';
import Header from '../../components/Header/Header';

import WidgetMarket from '../../components/Widgets/WidgetMarket';
import WidgetTradeHistory from '../../components/Widgets/WidgetTradeHistory';
import WidgetCoinVertical from '../../components/Widgets/WidgetCoinVertical';
import WidgetCoinHorizontal from '../../components/Widgets/WidgetCoinHorizontal';

const MarketScreen = () => (
  <MainLayout>
    <Header title='Market' />
    <div className='flex'>
      <div className='content-left box-right-padding'>
        <WidgetMarket />

        <WidgetCoinVertical />
      </div>
      <div className='content-right flex-1'>
        <WidgetCoinHorizontal />

        <div className='flex'>
          <div className='content-right flex-1 box-right-padding'>
            <WidgetTradeHistory />
          </div>
          <div className='content-left'>
            <WidgetTradeHistory />
          </div>
        </div>

        <div className='flex flex-space-between'>
          <div className='flex-1 box-right-padding'>
            <WidgetTradeHistory />
          </div>
          <div className='flex-1 box-right-padding'>
            <WidgetTradeHistory />
          </div>
          <div className='flex-1'>
            <WidgetTradeHistory />
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
);

export default MarketScreen;
