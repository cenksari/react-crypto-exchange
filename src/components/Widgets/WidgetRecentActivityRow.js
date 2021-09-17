import { memo } from 'react';

const WidgetRecentActivityRow = memo(() => (
  <div className='activity-row flex flex-center flex-space-between no-select'>
    <div>
      <div className='icon green'>
        <i className='material-icons'>arrow_upward</i>
      </div>
    </div>
    <div className='center'>
      <strong>Yükleme</strong>
    </div>
    <div className='center'>
      <p>06:25:57</p>
    </div>
    <div className='center'>
      <strong>+$5553,12</strong>
    </div>
    <div className='center'>
      <span className='green'>Bitmiş</span>
    </div>
  </div>
));

export default WidgetRecentActivityRow;
