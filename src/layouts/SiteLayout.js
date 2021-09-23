import { memo } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar/Navbar';

const SiteLayout = memo(({ children }) => (
  <div className='flex'>
    <div className='navbar full-height responsive-hide'>
      <Navbar />
    </div>
    <div className='content full-height flex-1'>{children}</div>
  </div>
));

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteLayout;
