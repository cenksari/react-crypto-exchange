import { memo } from 'react';
import PropTypes from 'prop-types';

import Navbar from '../components/Navbar/Navbar';

const SiteLayout = memo(({ children }) => (
  <div className='flex full-width'>
    <div className='navbar full-height'>
      <Navbar />
    </div>
    <div className='content flex-1'>{children}</div>
  </div>
));

SiteLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SiteLayout;
