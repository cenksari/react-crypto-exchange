import { memo } from 'react';
import PropTypes from 'prop-types';

import Icon from './Icon';
import Amount from './Amount';
import Status from './Status';

const TransactionRow = memo(({ item }) => (
  <tr>
    <td>
      <Icon type={item.type} />
    </td>
    <td className='responsive-hide'>#{item.transaction}</td>
    <td className='responsive-hide'>{item.date}</td>
    <td>{item.from}</td>
    <td className='nowrap'>
      <div className='icon cover' style={{ backgroundImage: `url('${item.toPicture}')` }} />
      {item.to}
    </td>
    <td className='nowrap'>
      <div className='icon cover' style={{ backgroundImage: `url('${item.icon}')` }} />
      <strong>{item.coin}</strong>
    </td>
    <td className='center'>
      <Amount type={item.type} amount={item.amount} />
    </td>
    <td className='center'>
      <Status status={item.status} />
    </td>
  </tr>
));

TransactionRow.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  item: PropTypes.object.isRequired,
};

export default TransactionRow;
