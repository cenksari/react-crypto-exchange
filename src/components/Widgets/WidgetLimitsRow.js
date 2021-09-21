import { memo } from 'react';
import PropTypes from 'prop-types';

const WidgetLimitsRow = memo(({ item }) => {
  const RenderStatusNameAndColor = ({ status }) => {
    if (status === 1) {
      return <span className='green'>Limit uygun</span>;
    }

    return <span className='red'>Bakiye yetersiz</span>;
  };

  RenderStatusNameAndColor.propTypes = {
    status: PropTypes.number.isRequired,
  };

  return (
    <div className='limits-row flex flex-center flex-space-between no-select'>
      <div>
        <div className='icon' />
        <strong>{item.currency}</strong>
      </div>
      <div className='center'>
        <p>{item.limit24h}</p>
      </div>
      <div className='center'>
        <strong>{item.limit30d}</strong>
      </div>
      <div className='center'>
        <RenderStatusNameAndColor status={item.status} />
      </div>
    </div>
  );
});

WidgetLimitsRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default WidgetLimitsRow;
