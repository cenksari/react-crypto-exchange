import { useState } from 'react';

import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';

import Box from '../../components/Common/Box';
import WidgetRecentActivity from '../../components/Widgets/WidgetRecentActivity';

const DashboardScreen = () => {
  const [tab, setTab] = useState(0);

  return (
    <SiteLayout>
      <Header icon='sort' title='Yatır-çek' />
      <div className='flex flex-destroy flex-space-between'>
        <div className='flex-1 box-right-padding'>
          <Box>
            <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
              <div className='flex flex-center flex-space-between'>
                <div>
                  <p>Yatır-çek</p>
                </div>
                <ul>
                  <li>
                    <button
                      type='button'
                      className={tab === 0 ? 'active' : 'passive'}
                      onClick={() => setTab(0)}
                    >
                      Yatır
                    </button>
                  </li>
                  <li>
                    <button
                      type='button'
                      className={tab === 1 ? 'active' : 'passive'}
                      onClick={() => setTab(1)}
                    >
                      Çek
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {tab === 0 && (
              <div className='box-content box-horizontal-padding box-vertical-padding box-content-height-nobutton'>
                <form className='form' noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='view'>Banka bilgilerini görüntüle</label>
                        <select name='view' id='view'>
                          <option value='ZB'>Ziraat Bankası</option>
                          <option value='GB'>Garanti Bankası</option>
                          <option value='YKB'>Yapı ve Kredi Bankası</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>

                <div className='box-text flex flex-center flex-space-between'>
                  <div className='bank-info box-horizontal-padding'>
                    <img
                      width='150'
                      src='https://www.shefly.com/wp-content/uploads/2020/08/ziraat-bankasi-logo.png'
                      alt=''
                      draggable='false'
                    />
                    <p>
                      <strong>Ziraat Bankası - Şube Adı</strong>
                      <br />
                      TR00 0000 0000 0000 0000 0000 00
                    </p>
                  </div>
                  <button type='button' className='pointer red no-select'>
                    <i className='material-icons'>content_copy</i>
                  </button>
                </div>
              </div>
            )}

            {tab === 1 && (
              <div className='box-content box-horizontal-padding box-vertical-padding box-content-height-nobutton'>
                <form className='form' noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='iban'>IBAN ekle</label>
                        <input
                          type='text'
                          name='iban'
                          id='iban'
                          placeholder='IBAN numarası giriniz'
                        />
                      </div>
                    </div>
                  </div>
                </form>

                <form className='form' noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <label htmlFor='view'>Kayıtlı IBANlarım</label>
                        <select name='view' id='view'>
                          <option value='ZB'>Ziraat Bankası</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>

                <div className='box-text box-horizontal-padding center'>
                  <p>
                    <strong>TR00 0000 0000 0000 0000 0000 00</strong>
                  </p>
                  <p>
                    <span>Çekilecek tutar : </span>
                    <strong>2376.00 TL</strong>
                  </p>
                </div>

                <button type='button' className='button button-purple button-medium button-block'>
                  Para çek
                </button>
              </div>
            )}
          </Box>
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
                &bull; EFT transferlerinde alıcı/lehdar kısmına BTCLEVER yazılması gerekmektedir.
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
                &bull; Kimlik doğrulama işleminizi tamamladığınız için açıklama kısmına sabit
                yatırma kodu girmeniz gerekmemektedir.
              </p>
            </div>
          </Box>
        </div>
      </div>
      <div className='flex flex-destroy flex-space-between'>
        <div className='flex-1 box-right-padding'>
          <WidgetRecentActivity />
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
                &bull; Bankaların mesai saatleri dışında verilen çekim talimatları, bankaların
                mesaiye başlaması ile birlikte işleme alınır.
              </p>
            </div>
          </Box>
        </div>
      </div>
    </SiteLayout>
  );
};

export default DashboardScreen;
