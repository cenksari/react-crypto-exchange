// interfaces
interface IProps {
  searchValue: string;
  searchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  searchOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TopBar: React.FC<IProps> = ({ searchValue, searchOnChange, searchSubmit }) => (
  <div className='top-buttons flex flex-destroy flex-center flex-space-between'>
    <div>
      <div className='top-search no-select nowrap'>
        <form noValidate onSubmit={searchSubmit}>
          <input
            type='text'
            id='search'
            name='search'
            autoComplete='off'
            value={searchValue}
            onChange={searchOnChange}
            placeholder='Search keyword'
          />
          <button type='submit' className='pointer'>
            <i className='material-icons'>search</i>
          </button>
        </form>
      </div>
    </div>
    <div>
      <button type='button' className='button button-white button-large'>
        <i className='material-icons button-icon-left'>event</i>
        Period
        <i className='material-icons button-icon-right'>keyboard_arrow_down</i>
      </button>
      <button type='button' className='button button-purple button-large'>
        <i className='material-icons button-icon-left'>download</i>
        Download CSV
      </button>
    </div>
  </div>
);

export default TopBar;
