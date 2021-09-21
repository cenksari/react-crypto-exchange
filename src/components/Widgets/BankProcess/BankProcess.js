import { memo, useState, useEffect } from 'react';

import Box from '../../Common/Box';

const BankProcess = memo(() => {
  const [tab, setTab] = useState(0);
  const [bankDetails, setBankDetails] = useState([]);
  const [selectedBank, setSelectedBank] = useState(1);

  useEffect(() => {
    const dataArray = [
      {
        id: 1,
        name: 'Ziraat Bankası',
        branch: 'Ataşehir Şubesi',
        iban: 'TR01 0000 0000 0000 0000 0000 01',
        logo: 'https://mekaskablo.com/wp-content/uploads/2019/11/ziraat-bankas%C4%B1-logo.jpg',
      },
      {
        id: 2,
        name: 'Garanti Bankası',
        branch: 'Etiler Şubesi',
        iban: 'TR02 0000 0000 0000 0000 0000 02',
        logo: 'https://upload.wikimedia.org/wikipedia/tr/7/75/Garanti_BBVA.png',
      },
      {
        id: 3,
        name: 'Yapı ve Kredi Bankası',
        branch: 'Şişli Şubesi',
        iban: 'TR03 0000 0000 0000 0000 0000 03',
        logo: 'data:image/png;base64,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',
      },
    ];

    setBankDetails(dataArray);

    setSelectedBank(dataArray[0]);
  }, []);

  const handleViewOnChange = (e) => {
    e.preventDefault();

    const { value } = e.target;

    const findBank = bankDetails.find((item) => item.id === +value);

    setSelectedBank(findBank);
  };

  return (
    <Box>
      <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
        <div className='flex flex-center flex-space-between'>
          <div>
            <p>Yatır-çek</p>
          </div>
          <ul>
            <li>
              <button
                type='button'
                className={tab === 0 ? 'active' : 'passive'}
                onClick={() => setTab(0)}
              >
                Yatır
              </button>
            </li>
            <li>
              <button
                type='button'
                className={tab === 1 ? 'active' : 'passive'}
                onClick={() => setTab(1)}
              >
                Çek
              </button>
            </li>
          </ul>
        </div>
      </div>
      {tab === 0 && (
        <div className='box-content box-horizontal-padding box-vertical-padding box-content-height-nobutton'>
          <form className='form' noValidate>
            <div className='form-elements'>
              <div className='form-line'>
                <div className='full-width'>
                  <label htmlFor='view'>Banka bilgilerini görüntüle</label>
                  <select name='view' id='view' onChange={handleViewOnChange}>
                    {bankDetails &&
                      bankDetails.map((item) => (
                        <option key={item.id.toString()} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
          </form>

          <div className='box-text flex flex-center flex-space-between'>
            {selectedBank && (
              <>
                <div className='bank-info box-horizontal-padding'>
                  <img height='35' src={selectedBank.logo} alt='Bank logo' draggable='false' />
                  <p>
                    <strong>
                      {selectedBank.name} - {selectedBank.branch}
                    </strong>
                    <br />
                    {selectedBank.iban}
                  </p>
                </div>
                <button type='button' className='pointer red no-select'>
                  <i className='material-icons'>content_copy</i>
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {tab === 1 && (
        <div className='box-content box-horizontal-padding box-vertical-padding box-content-height-nobutton'>
          <form className='form' noValidate>
            <div className='form-elements'>
              <div className='form-line'>
                <div className='full-width'>
                  <label htmlFor='iban'>IBAN ekle</label>
                  <input type='text' name='iban' id='iban' placeholder='IBAN numarası giriniz' />
                </div>
              </div>
            </div>
          </form>

          <form className='form' noValidate>
            <div className='form-elements'>
              <div className='form-line'>
                <div className='full-width'>
                  <label htmlFor='view'>Kayıtlı IBANlarım</label>
                  <select name='view' id='view'>
                    <option value='ZB'>Ziraat Bankası</option>
                  </select>
                </div>
              </div>
            </div>
          </form>

          <div className='box-text box-horizontal-padding center'>
            <p>
              <strong>TR00 0000 0000 0000 0000 0000 00</strong>
            </p>
            <p>
              <span>Çekilecek tutar : </span>
              <strong>2376.00 TL</strong>
            </p>
          </div>

          <button type='button' className='button button-purple button-medium button-block'>
            Para çek
          </button>
        </div>
      )}
    </Box>
  );
});

export default BankProcess;
