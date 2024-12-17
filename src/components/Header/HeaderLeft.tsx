// interfaces
interface IProps {
  icon?: string;
  title: string;
}

const HeaderLeft: React.FC<IProps> = ({ icon, title }) => (
  <div className='header-left nowrap no-select'>
    {icon && (
      <button type='button' className='pointer'>
        <i className='material-icons'>{icon}</i>
      </button>
    )}
    <h1>{title}</h1>
  </div>
);

export default HeaderLeft;
