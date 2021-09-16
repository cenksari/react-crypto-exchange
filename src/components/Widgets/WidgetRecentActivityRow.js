import { memo } from 'react';

const WidgetRecentActivityRow = memo(() => (
  <div className='activity-row flex flex-center flex-space-between no-select'>
    <div>
      <div className='icon green'>
        <i className='material-icons'>arrow_upward</i>
      </div>
    </div>
    <div>
      <strong>Yükleme</strong>
    </div>
    <div>
      <p>06:25:57</p>
    </div>
    <div>
      <strong>+$5553,12</strong>
    </div>
    <div>
      <span className='green'>Bitmiş</span>
    </div>
  </div>
));

export default WidgetRecentActivityRow;
