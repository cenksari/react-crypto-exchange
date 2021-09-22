import { memo, useState } from 'react';
import PropTypes from 'prop-types';

import Box from '../../Common/Box';

const CoinVertical = memo(({ item }) => {
  const [showMore, setShowMore] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpened(!menuOpened);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  const handleSliceDescription = (description) => {
    if (description) {
      if (description.length > 100) {
        return `${item.description
          .replace(/(\r\n|\n|\r)/gm, ' ')
          .replace(/\s+/g, ' ')
          .slice(0, 100)}...`;
      }

      return description;
    }

    return '';
  };

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <p>Hakkında</p>
          <button type='button' className='box-icon pointer' onClick={() => handleMenuOpen()}>
            <i className='material-icons'>more_vert</i>
          </button>

          {menuOpened && (
            <div className='box-dropdown'>
              <ul>
                <li>
                  <button type='button'>
                    <i className='material-icons'>settings</i>
                    Button 1
                  </button>
                </li>
                <li>
                  <button type='button'>
                    <i className='material-icons'>favorite</i>
                    Button 2
                  </button>
                </li>
                <li>
                  <button type='button'>
                    <i className='material-icons'>info</i>
                    Button 3
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className='widget-coin-vertical box-content-height-nobutton'>
        <div className='center'>
          <div
            className='icon cover'
            style={{
              backgroundImage: `url('${item.icon}')`,
            }}
          />
        </div>
        <div>
          <div className='center'>
            <h3>{item.name}</h3>
            <strong>{item.symbol}</strong>
            <div className='coin-price no-select'>
              1 {item.symbol} = {item.amount} {item.currency}
            </div>
          </div>
          <div className='box-horizontal-padding box-vertical-padding'>
            {showMore ? (
              <p>{item.description}</p>
            ) : (
              <p>{handleSliceDescription(item.description)}</p>
            )}
            <button type='button' className='pointer' onClick={() => handleShowMore()}>
              {showMore ? 'Daha az...' : 'Devamı...'}
            </button>
          </div>
        </div>
      </div>
    </Box>
  );
});

CoinVertical.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default CoinVertical;
