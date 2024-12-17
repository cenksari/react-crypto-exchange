// interfaces
interface IProps {
  children: React.ReactNode;
}

const Box: React.FC<IProps> = ({ children }) => <div className='box'>{children}</div>;

export default Box;
