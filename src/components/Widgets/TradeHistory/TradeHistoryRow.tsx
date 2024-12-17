// interfaces
interface IProps {
  item: any;
}

const TradeHistoryRow: React.FC<IProps> = ({ item }) => (
  <tr className={item.type === 1 ? 'green' : 'red'}>
    <td className='left'>
      {item.amount} {item.currency}
    </td>
    <td className='center'>{item.weight}</td>
    <td className='center'>{item.type === 1 ? 'ALIŞ' : 'SATIŞ'}</td>
    <td className='right'>{item.time}</td>
  </tr>
);

export default TradeHistoryRow;
