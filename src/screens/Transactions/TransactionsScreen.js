import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';

const TransactionsScreen = () => (
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

    <table className='data-table'>
      <thead>
        <tr>
          <th className='left'>&nbsp;</th>
          <th className='left responsive-hide'>İşlem</th>
          <th className='left responsive-hide'>Tarih</th>
          <th className='left'>Kimden</th>
          <th className='left'>Kime</th>
          <th className='left'>Coin</th>
          <th className='center'>Tutar</th>
          <th className='center'>Durum</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className='operation green'>
              <i className='material-icons'>arrow_upward</i>
            </div>
          </td>
          <td className='responsive-hide'>#12415346563475</td>
          <td className='responsive-hide'>2/5/2020 06:24:45</td>
          <td>Tarık</td>
          <td className='nowrap'>
            <div className='icon' />
            Cenk
          </td>
          <td className='nowrap'>
            <div className='icon' />
            <strong>Bitcoin</strong>
          </td>
          <td className='center'>
            <strong className='green'>+$5.553</strong>
          </td>
          <td className='center'>
            <span className='status green'>BEKLİYOR</span>
          </td>
        </tr>
      </tbody>
    </table>
  </SiteLayout>
);

export default TransactionsScreen;
