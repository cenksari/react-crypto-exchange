import { memo } from 'react';
import PropTypes from 'prop-types';

const WidgetRecentActivityRow = memo(({ item }) => {
  const RenderProcessTypeAndColor = ({ type }) => {
    if (type === 1) {
      return (
        <div className='nowrap'>
          <div className='icon green'>
            <i className='material-icons'>arrow_upward</i>
          </div>
          <strong>Yükleme</strong>
        </div>
      );
    }

    return (
      <div className='nowrap'>
        <div className='icon red'>
          <i className='material-icons'>arrow_downward</i>
        </div>
        <strong>Çekme</strong>
      </div>
    );
  };

  RenderProcessTypeAndColor.propTypes = {
    type: PropTypes.number.isRequired,
  };

  const RenderStatusNameAndColor = ({ status }) => {
    if (status === 1) {
      return <span className='green'>Bitmiş</span>;
    }

    if (status === 2) {
      return <span className='red'>Başarısız</span>;
    }

    return <span className='gray'>Bekliyor</span>;
  };

  RenderStatusNameAndColor.propTypes = {
    status: PropTypes.number.isRequired,
  };

  return (
    <div className='activity-row flex flex-center flex-space-between no-select'>
      <RenderProcessTypeAndColor type={item.type} />
      <div className='center'>
        <p>{item.time}</p>
      </div>
      <div className='center'>
        <strong>{item.amount}</strong>
      </div>
      <div className='center'>
        <RenderStatusNameAndColor status={item.status} />
      </div>
    </div>
  );
});

WidgetRecentActivityRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default WidgetRecentActivityRow;
