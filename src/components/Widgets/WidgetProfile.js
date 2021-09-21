import { memo } from 'react';
import { Link } from 'react-router-dom';

import Box from '../Common/Box';

const WidgetProfile = memo(() => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
      <div className='flex flex-center flex-space-between'>
        <p>Profilim</p>
        <button type='button' className='box-icon pointer'>
          <i className='material-icons'>more_vert</i>
        </button>
      </div>
    </div>
    <div className='widget-profile box-content box-content-height-nobutton'>
      <div className='center'>
        <form className='upload no-select' noValidate>
          <input type='file' name='file' id='file' accept='.jpg, .jpeg' />
          <label htmlFor='file'>
            <div
              className='icon cover pointer'
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/proxy/70CmgghIIVNeYzBnv-fjKkeAKnR1SDkPJJ22oyr2aBYisbr4VSij5HRuQrncxla71blLv0mG307_KsyHIvy1MVKgAg')`,
              }}
            />
            <div className='edit pointer'>
              <i className='material-icons'>edit</i>
            </div>
          </label>
        </form>
      </div>
      <div className='box-horizontal-padding'>
        <div className='center'>
          <h3>Cenk SARI</h3>
          <strong>Seviye 1</strong>
          <p>Limitlerinizi arttırmak için seviye 2 olmalısınız.</p>
          <Link to='/members/application'>Seviye 2 başvuru</Link>
        </div>
      </div>
    </div>
  </Box>
));

export default WidgetProfile;
