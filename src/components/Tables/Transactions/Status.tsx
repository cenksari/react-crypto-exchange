// interfaces
interface IProps {
  status: number;
}

const Status: React.FC<IProps> = ({ status }) => {
  if (status === 1) {
    return <span className='status green'>COMPLETED</span>;
  }

  if (status === 2) {
    return <span className='status red'>CANCELLED</span>;
  }

  return <span className='status gray'>WAITING</span>;
};

export default Status;
