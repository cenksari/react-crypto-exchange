import React from 'react';

// interfaces
interface IProps {
  children: React.ReactNode;
}

const Box = ({ children }: IProps): React.JSX.Element => <div className='box'>{children}</div>;

export default Box;
