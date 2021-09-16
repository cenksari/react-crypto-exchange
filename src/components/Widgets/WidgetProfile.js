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
        <div className='icon' />
        <div className='edit pointer'>
          <i className='material-icons'>edit</i>
        </div>
      </div>
      <div>
        <div className='center'>
          <h3>Tarık Özbalkan</h3>
          <strong>Seviye 1</strong>
          <p>Limitlerinizi arttırmak için seviye 2 olmalısınız.</p>
          <Link to='/'>Seviye 2 başvuru</Link>
        </div>
      </div>
    </div>
  </Box>
));

export default WidgetProfile;
