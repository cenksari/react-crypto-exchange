import React from 'react';

// interfaces
interface IProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: IProps): React.JSX.Element => <div>{children}</div>;

export default MainLayout;
