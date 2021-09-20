import { memo } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar/Navbar';

const SiteLayout = memo(({ children }) => (
  <div className='flex'>
    <div className='navbar full-height responsive-hide'>
      <Navbar />
    </div>
    <div className='content content-70 flex-1'>{children}</div>
  </div>
));

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteLayout;
