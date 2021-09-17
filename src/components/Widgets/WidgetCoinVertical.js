import { memo } from 'react';

import Box from '../Common/Box';

const WidgetCoinVertical = memo(() => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
      <div className='flex flex-center flex-space-between'>
        <p>Hakkında</p>
        <button type='button' className='box-icon pointer'>
          <i className='material-icons'>more_vert</i>
        </button>
      </div>
    </div>
    <div className='widget-coin-vertical box-content-height-nobutton'>
      <div className='center'>
        <div className='icon' />
      </div>
      <div>
        <div className='center'>
          <h3>Bitcoin</h3>
          <strong>BTC</strong>
          <div className='coin-price no-select'>1 BTC = 420.000 TRY</div>
        </div>
        <div className='box-horizontal-padding box-vertical-padding'>
          <p>
            Bitcoin, Satoshi Nakamoto adını kullanmış bilinmeyen bir kişi veya grup tarafından
            2008&apos;de icat edilmiş bir kriptoparadır. 2009&apos;da bir açık kaynak kodlu yazılım
            olarak piyasaya...
          </p>
          <button type='button' className='pointer'>
            Devamı....
          </button>
        </div>
      </div>
    </div>
  </Box>
));

export default WidgetCoinVertical;
