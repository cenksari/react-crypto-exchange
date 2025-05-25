import { useRef, useState } from 'react';

// hooks
import useClickOutside from '../../../hooks/useClickOutside';

// components
import Box from '../../Common/Box';

// interfaces
interface IProps {
  item: any;
}

const CoinVertical: React.FC<IProps> = ({ item }) => {
  const ref = useRef<any>(null);

  const [showMore, setShowMore] = useState<boolean>(false);
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  useClickOutside(ref, () => setMenuOpened(false));

  /**
   * Toggles the state of the menu to open or close.
   */
  const handleMenuOpen = (): void => setMenuOpened(!menuOpened);

  /**
   * Toggles the state of showMore to true or false.
   */
  const handleShowMore = (): void => setShowMore(!showMore);

  /**
   * Slices the description of the item.
   * @param {string} description - The description of the item.
   * @returns {string} The sliced description.
   */
  const handleSliceDescription = (description: string): string => {
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
        <div ref={ref} className='flex flex-center flex-space-between'>
          <p>About</p>
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
              {showMore ? 'See less...' : 'See more...'}
            </button>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CoinVertical;
