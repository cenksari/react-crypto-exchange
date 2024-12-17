// components
import StatusName from './StatusName';
import ProcessType from './ProcessType';

// interfaces
interface IProps {
  item: any;
}

const RecentActivityRow: React.FC<IProps> = ({ item }) => (
  <div className='activity-row flex flex-center flex-space-between no-select'>
    <ProcessType type={item.type} />
    <div className='center'>
      <p>{item.time}</p>
    </div>
    <div className='center'>
      <strong>
        {item.amount} {item.currency}
      </strong>
    </div>
    <div className='center'>
      <StatusName status={item.status} />
    </div>
  </div>
);

export default RecentActivityRow;
