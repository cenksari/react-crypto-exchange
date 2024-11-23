// interfaces
interface IProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IProps): JSX.Element => <div>{children}</div>;

export default MainLayout;
