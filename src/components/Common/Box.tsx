// interfaces
interface IProps {
  children: React.ReactNode;
}

const Box = ({ children }: IProps): JSX.Element => <div className='box'>{children}</div>;

export default Box;
