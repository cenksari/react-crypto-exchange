// interfaces
interface IProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<IProps> = ({ children }) => <div>{children}</div>;

export default MainLayout;
