import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';

import Box from '../../components/Common/Box';
import BankProcess from '../../components/Widgets/BankProcess/BankProcess';
import RecentActivity from '../../components/Widgets/RecentActivity/RecentActivity';

const DashboardScreen = () => (
  <SiteLayout>
    <Header icon='sort' title='Yatır-çek' />
    <div className='flex flex-destroy flex-space-between'>
      <div className='flex-1 box-right-padding'>
        <BankProcess />
      </div>
      <div className='flex-1'>
        <Box>
          <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
            <div className='flex flex-center flex-space-between'>
              <p>Önemli</p>
            </div>
          </div>
          <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
            <p>
              &bull; EFT transferlerinde alıcı/lehdar kısmına Crypto Exchange yazılması
              gerekmektedir.
            </p>
            <p>
              &bull; Adınıza açılmış olan tüm bireysel, vadesiz, Türk Lirası hesaplarınızdan,
              listelenen hesaplara Havale/EFT işlemi gerçekleştirebilirsiniz. Farklı kişiye ait
              hesaplardan yapılan gönderimler kabul edilmeyecektir.
            </p>
            <p>
              &bull; ATM kullanılarak yapılan transferler (kartlı/kartsız), gönderici bilgilerini
              teyit etmek mümkün olmadığı için kabul edilmeyecektir.
            </p>
            <p>
              &bull; Gönderdiğiniz miktar kontrollerin ardından sistem tarafından otomatik olarak
              hesabınıza yansıtılacaktır, ayrıca bir bildirimde bulunmanıza gerek yoktur.
            </p>
            <p>
              &bull; Kimlik doğrulama işleminizi tamamladığınız için açıklama kısmına sabit yatırma
              kodu girmeniz gerekmemektedir.
            </p>
          </div>
        </Box>
      </div>
    </div>
    <div className='flex flex-destroy flex-space-between'>
      <div className='flex-1 box-right-padding'>
        <RecentActivity />
      </div>
      <div className='flex-1'>
        <Box>
          <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
            <div className='flex flex-center flex-space-between'>
              <p>Önemli</p>
            </div>
          </div>
          <div className='box-content box-text box-horizontal-padding box-content-height-nobutton'>
            <p>
              &bull; Adınıza açılmış (bireysel, vadesiz, TL) tüm banka hesaplarınıza çekim
              yapabilirsiniz. Farklı bir kişiye transfer işleminiz gerçekleşmeyecektir.
            </p>
            <p>&bull; Minimum çekim tutarı 10 TL&apos;dir.</p>
            <p>&bull; Çekim işlemi sırasında 3 TL işlem ücreti tahsil edilir.</p>
            <p>
              &bull; Bir çekim talimatı verdiğinizde bu tutar kullanılabilir bakiyenizden
              düşecektir.
            </p>
            <p>
              &bull; Henüz gerçekleşmemiş talimatlarınızı iptal edebilirsiniz. Bu durumda talimat
              tutarı tekrar kullanılabilir bakiyenize aktarılır.
            </p>
            <p>
              &bull; Bankaların mesai saatleri dışında verilen çekim talimatları, bankaların mesaiye
              başlaması ile birlikte işleme alınır.
            </p>
          </div>
        </Box>
      </div>
    </div>
  </SiteLayout>
);

export default DashboardScreen;
