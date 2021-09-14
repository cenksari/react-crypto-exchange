import { memo } from 'react';
import PropTypes from 'prop-types';

const MainLayout = memo(({ children }) => (
  <div className='full-width'>
    <div className='content'>{children}</div>
  </div>
));

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
