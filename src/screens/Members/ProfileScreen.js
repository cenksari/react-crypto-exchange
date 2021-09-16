import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';

import WidgetLimits from '../../components/Widgets/WidgetLimits';
import WidgetProfile from '../../components/Widgets/WidgetProfile';
import WidgetMyAssets from '../../components/Widgets/WidgetMyAssets';
import WidgetRecentActivity from '../../components/Widgets/WidgetRecentActivity';

const ProfileScreen = () => (
  <SiteLayout>
    <Header icon='sort' title='Profil' />
    <div className='flex'>
      <div className='content-30 box-right-padding'>
        <WidgetProfile />
      </div>
      <div className='content-70 flex-1'>
        <WidgetMyAssets />
      </div>
    </div>

    <div className='flex flex-space-between'>
      <div className='flex-1 box-right-padding'>
        <WidgetRecentActivity />
      </div>
      <div className='flex-1'>
        <WidgetLimits />
      </div>
    </div>
  </SiteLayout>
);

export default ProfileScreen;
