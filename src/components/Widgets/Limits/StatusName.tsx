// interfaces
interface IProps {
  status: number;
}

const StatusName: React.FC<IProps> = ({ status }) => {
  if (status === 1) {
    return <span className='green'>Limit suitable</span>;
  }

  return <span className='red'>Insufficent balance</span>;
};

export default StatusName;
