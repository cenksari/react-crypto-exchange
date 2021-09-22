import { memo } from 'react';
import PropTypes from 'prop-types';

import Box from '../../Common/Box';

const CoinHorizontal = memo(({ item, searchValue, searchOnChange, searchSubmit }) => (
  <Box>
    <div className='box-content box-vertical-padding box-horizontal-padding'>
      <div className='widget-coin-horizontal flex flex-center flex-space-around nowrap'>
        <div>
          <div className='icon cover' style={{ backgroundImage: `url('${item.icon}')` }} />
        </div>
        <div>
          <label>{item.name}</label>
          <strong>{item.exchange}</strong>
        </div>
        <div className='divider' />
        <div>
          <label className='gray'>Değer fiyatı</label>
          <strong>
            {item.amount} {item.currency}
            <em className='red'>{item.change}</em>
          </strong>
        </div>
        <div className='divider responsive-hide2' />
        <div className='responsive-hide2'>
          <label className='gray'>Finansman oranı</label>
          <strong>{item.financialRate}</strong>
        </div>
        <div className='divider responsive-hide2' />
        <div className='responsive-hide2'>
          <label className='gray'>Hacim</label>
          <strong>{item.weight}</strong>
        </div>
        <div className='divider responsive-hide' />
        <div className='no-select responsive-hide'>
          <form onSubmit={searchSubmit} noValidate>
            <input
              type='text'
              name='keyword'
              id='keyword'
              placeholder='Arama'
              autoComplete='off'
              onChange={searchOnChange}
              value={searchValue}
            />
            <button type='button' className='pointer'>
              <i className='material-icons'>search</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </Box>
));

CoinHorizontal.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
  searchValue: PropTypes.string.isRequired,
  searchSubmit: PropTypes.func.isRequired,
  searchOnChange: PropTypes.func.isRequired,
};

export default CoinHorizontal;
