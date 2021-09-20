import { Sparklines, SparklinesLine } from 'react-sparklines';

import SiteLayout from '../../layouts/SiteLayout';
import Header from '../../components/Header/Header';

const CapitalScreen = () => (
  <SiteLayout>
    <Header icon='sort' title='Piyasa' />
    <div className='top-buttons flex flex-destroy flex-center flex-space-between'>
      <div>
        <div className='top-search'>
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
          <th className='left'>Sıra</th>
          <th className='left'>Coin</th>
          <th className='center'>Son fiyat</th>
          <th className='center'>Değişim (24s)</th>
          <th className='center'>Hacim (24s)</th>
          <th className='left responsive-hide'>Grafik</th>
          <th className='right'>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div className='rank accent'>#1</div>
          </td>
          <td className='nowrap'>
            <div className='icon' />
            <strong>Bitcoin</strong>
          </td>
          <td className='center'>
            <strong>$11.854.12</strong>
          </td>
          <td className='center'>
            <strong className='green'>2.54%</strong>
          </td>
          <td className='center'>$220.080.878.451</td>
          <td className='responsive-hide'>
            <div className='line-chart'>
              <Sparklines
                data={[5, 10, 5, 20, 8, 15, 22, 8, 12, 8, 32, 16, 29, 20, 16, 30, 42, 45]}
                width={200}
                height={50}
              >
                <SparklinesLine style={{ strokeWidth: 4 }} color='#32b778' />
              </Sparklines>
            </div>
          </td>
          <td className='right'>
            <button type='button' className='pointer'>
              <i className='material-icons'>more_vert</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </SiteLayout>
);

export default CapitalScreen;
