import { useState } from 'react';

// components
import Box from '../../Common/Box';

const BuySell: React.FC = () => {
  const [primaryTab, setPrimaryTab] = useState<number>(0);
  const [secondaryTab, setSecondaryTab] = useState<number>(0);

  /**
   * Handles the primary tab change event.
   *
   * @param {number} tabNum - The number of the tab to be selected.
   */
  const handlePrimaryTab = (tabNum: number): void => {
    setPrimaryTab(tabNum);

    setSecondaryTab(0);
  };

  /**
   * Handles the secondary tab change event.
   *
   * @param {number} tabNum - The number of the tab to be selected.
   */
  const handleSecondaryTab = (tabNum: number): void => setSecondaryTab(tabNum);

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <p>Buy-sell</p>
        </div>
      </div>
      <div className='box-horizontal-padding box-content-height-nobutton'>
        <div className='tabs no-select'>
          <button
            type='button'
            onClick={() => handlePrimaryTab(0)}
            className={primaryTab === 0 ? 'active' : 'passive'}
          >
            BUY
          </button>
          <button
            type='button'
            onClick={() => handlePrimaryTab(1)}
            className={primaryTab === 1 ? 'active' : 'passive'}
          >
            SELL
          </button>
        </div>

        {primaryTab === 0 && (
          <>
            <div className='secondary-tabs flex flex-center flex-space-between no-select'>
              <button
                type='button'
                onClick={() => handleSecondaryTab(0)}
                className={secondaryTab === 0 ? 'active' : 'passive'}
              >
                Market
              </button>
              <button
                type='button'
                onClick={() => handleSecondaryTab(1)}
                className={secondaryTab === 1 ? 'active' : 'passive'}
              >
                Limit
              </button>
              <button
                type='button'
                onClick={() => handleSecondaryTab(2)}
                className={secondaryTab === 2 ? 'active' : 'passive'}
              >
                Stop-limit
              </button>
            </div>

            {secondaryTab === 0 && (
              <>
                <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                  <div>
                    <strong>Amount</strong>
                    <i
                      className='material-icons'
                      title='Lorem ipsum dolor sit amet consecteteur adispicing elit.'
                    >
                      info
                    </i>
                  </div>
                  <div className='right'>
                    <input type='text' id='m' name='m' placeholder='0' />
                    <strong>BTC</strong>
                  </div>
                </div>
                <div className='buy-sell-percentage flex flex-center flex-space-between no-select'>
                  <span>10%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>Max</span>
                </div>
                <div className='box-button box-vertical-padding'>
                  <button type='button' className='button button-green button-medium button-block'>
                    Place a buy order
                  </button>
                </div>
              </>
            )}

            {secondaryTab === 1 && (
              <>
                <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                  <div>
                    <strong>Limit price</strong>
                    <i
                      className='material-icons'
                      title='Lorem ipsum dolor sit amet consecteteur adispicing elit.'
                    >
                      info
                    </i>
                  </div>
                  <div className='right'>
                    <input type='text' id='f' name='f' placeholder='0' />
                    <strong>TRY</strong>
                  </div>
                </div>
                <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                  <div>
                    <strong>Amount</strong>
                    <i
                      className='material-icons'
                      title='Lorem ipsum dolor sit amet consecteteur adispicing elit.'
                    >
                      info
                    </i>
                  </div>
                  <div className='right'>
                    <input type='text' id='m' name='m' placeholder='0' />
                    <strong>BTC</strong>
                  </div>
                </div>
                <div className='box-button box-vertical-padding'>
                  <button type='button' className='button button-green button-medium button-block'>
                    Place a buy order
                  </button>
                </div>
              </>
            )}

            {secondaryTab === 2 && <p>test</p>}
          </>
        )}

        {primaryTab === 1 && (
          <>
            <div className='secondary-tabs flex flex-center flex-space-around no-select'>
              <button
                type='button'
                onClick={() => handleSecondaryTab(0)}
                className={secondaryTab === 0 ? 'active' : 'passive'}
              >
                Market
              </button>
              <button
                type='button'
                onClick={() => handleSecondaryTab(1)}
                className={secondaryTab === 1 ? 'active' : 'passive'}
              >
                Limit
              </button>
            </div>

            {secondaryTab === 0 && (
              <>
                <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                  <div>
                    <strong>Stop</strong>
                    <i
                      className='material-icons'
                      title='Lorem ipsum dolor sit amet consecteteur adispicing elit.'
                    >
                      info
                    </i>
                  </div>
                  <div className='right'>
                    <input type='text' id='s' name='s' placeholder='0' />
                    <strong>TRY</strong>
                  </div>
                </div>
                <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                  <div>
                    <strong>Limit</strong>
                    <i
                      className='material-icons'
                      title='Lorem ipsum dolor sit amet consecteteur adispicing elit.'
                    >
                      info
                    </i>
                  </div>
                  <div className='right'>
                    <input type='text' id='l' name='l' placeholder='0' />
                    <strong>TRY</strong>
                  </div>
                </div>
                <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                  <div>
                    <strong>Amount</strong>
                    <i
                      className='material-icons'
                      title='Lorem ipsum dolor sit amet consecteteur adispicing elit.'
                    >
                      info
                    </i>
                  </div>
                  <div className='right'>
                    <input type='text' id='m' name='m' placeholder='0' />
                    <strong>BTC</strong>
                  </div>
                </div>
                <div className='box-button box-vertical-padding'>
                  <button type='button' className='button button-red button-medium button-block'>
                    Place a sell order
                  </button>
                </div>
              </>
            )}

            {secondaryTab === 1 && <p>test</p>}
          </>
        )}
      </div>
    </Box>
  );
};

export default BuySell;
