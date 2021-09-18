import { memo } from 'react';
import PropTypes from 'prop-types';

const WidgetRecentActivityRow = memo(({ color }) => (
  <div className='activity-row flex flex-center flex-space-between no-select'>
    <div className='nowrap'>
      <div className={color && `icon ${color}`}>
        <i className='material-icons'>{color === 'green' ? 'arrow_upward' : 'arrow_downward'}</i>
      </div>
      <strong>{color === 'green' ? 'Yükleme' : 'Çekme'}</strong>
    </div>
    <div className='center'>
      <p>06:25:57</p>
    </div>
    <div className='center'>
      <strong>+$5553,12</strong>
    </div>
    <div className='center'>
      <span className={color}>{color === 'green' ? 'Bitmiş' : 'Bekliyor'}</span>
    </div>
  </div>
));

WidgetRecentActivityRow.propTypes = {
  color: PropTypes.string.isRequired,
};

export default WidgetRecentActivityRow;
