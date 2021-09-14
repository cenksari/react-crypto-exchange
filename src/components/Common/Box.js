import { memo } from 'react';
import PropTypes from 'prop-types';

const Box = memo(({ children }) => <div className='box'>{children}</div>);

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
