// components
import Box from '../../Common/Box';

// interfaces
interface IProps {
  item: any;
  searchValue: string;
  searchSubmit: (e: React.FormEvent) => void;
  searchOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CoinHorizontal: React.FC<IProps> = ({ item, searchValue, searchOnChange, searchSubmit }) => (
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
              id='keyword'
              name='keyword'
              autoComplete='off'
              placeholder='Arama'
              value={searchValue}
              onChange={searchOnChange}
            />
            <button type='button' className='pointer'>
              <i className='material-icons'>search</i>
            </button>
          </form>
        </div>
      </div>
    </div>
  </Box>
);

export default CoinHorizontal;
