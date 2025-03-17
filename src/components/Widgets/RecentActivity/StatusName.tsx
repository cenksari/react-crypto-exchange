// interfaces
interface IProps {
  status: number;
}

const StatusName: React.FC<IProps> = ({ status }) => {
  if (status === 1) {
    return <span className='green'>Completed</span>;
  }

  if (status === 2) {
    return <span className='red'>Cancelled</span>;
  }

  return <span className='gray'>Waiting</span>;
};

export default StatusName;
