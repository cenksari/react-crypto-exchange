import { memo, useState } from 'react';

import Box from '../../Common/Box';

const BuySell = memo(() => {
  const [primaryTab, setPrimaryTab] = useState(0);
  const [secondaryTab, setSecondaryTab] = useState(0);

  const handlePrimaryTab = (tabNum) => {
    setPrimaryTab(tabNum);

    setSecondaryTab(0);
  };

  const handleSecondaryTab = (tabNum) => {
    setSecondaryTab(tabNum);
  };

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <p>Al-sat</p>
        </div>
      </div>
      <div className='box-horizontal-padding box-content-height-nobutton'>
        <div className='tabs no-select'>
          <button
            type='button'
            className={primaryTab === 0 ? 'active' : 'passive'}
            onClick={() => handlePrimaryTab(0)}
          >
            AL
          </button>
          <button
            type='button'
            className={primaryTab === 1 ? 'active' : 'passive'}
            onClick={() => handlePrimaryTab(1)}
          >
            SAT
          </button>
        </div>

        {primaryTab === 0 && (
          <>
            <div className='secondary-tabs flex flex-center flex-space-between no-select'>
              <button
                type='button'
                className={secondaryTab === 0 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(0)}
              >
                Market
              </button>
              <button
                type='button'
                className={secondaryTab === 1 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(1)}
              >
                Limit
              </button>
              <button
                type='button'
                className={secondaryTab === 2 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(2)}
              >
                Stop-limit
              </button>
            </div>

            {secondaryTab === 0 && (
              <>
                <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                  <div>
                    <strong>Miktar</strong>
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
                    Alış emri ver
                  </button>
                </div>
              </>
            )}

            {secondaryTab === 1 && (
              <>
                <div className='buy-sell-line flex flex-center flex-space-between no-select'>
                  <div>
                    <strong>Limit fiyatı</strong>
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
                    <strong>Miktar</strong>
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
                    Alış emri ver
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
                className={secondaryTab === 0 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(0)}
              >
                Market
              </button>
              <button
                type='button'
                className={secondaryTab === 1 ? 'active' : 'passive'}
                onClick={() => handleSecondaryTab(1)}
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
                    <strong>Miktar</strong>
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
                    Satış emri ver
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
});

export default BuySell;
