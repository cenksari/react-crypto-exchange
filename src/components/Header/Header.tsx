// components
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

// interfaces
interface IProps {
  icon?: string;
  title: string;
}

const Header: React.FC<IProps> = ({ icon, title }) => (
  <header className='flex flex-center flex-space-between'>
    <HeaderLeft icon={icon} title={title} />
    <HeaderRight />
  </header>
);

export default Header;
