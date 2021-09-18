import { memo } from 'react';
import { Link } from 'react-router-dom';

import Box from '../Common/Box';
import WidgetMyAssetsRow from './WidgetMyAssetsRow';

const WidgetMyAssets = memo(() => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
      <div className='flex flex-center flex-space-between'>
        <p>Kripto değerlerim</p>
        <div>
          <Link to='/' type='button' className='button button-purple button-small'>
            Kripto al
          </Link>
          <button type='button' className='box-icon pointer'>
            <i className='material-icons'>more_vert</i>
          </button>
        </div>
      </div>
    </div>
    <div className='box-content box-content-height-nobutton'>
      <WidgetMyAssetsRow color='green' />

      <WidgetMyAssetsRow color='green' />

      <WidgetMyAssetsRow color='red' />

      <WidgetMyAssetsRow color='green' />

      <WidgetMyAssetsRow color='red' />

      <WidgetMyAssetsRow color='green' />
    </div>
  </Box>
));

export default WidgetMyAssets;
