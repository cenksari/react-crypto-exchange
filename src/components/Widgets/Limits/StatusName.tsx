// interfaces
interface IProps {
  status: number;
}

const StatusName = ({ status }: IProps): JSX.Element => {
  if (status === 1) {
    return <span className='green'>Limit uygun</span>;
  }

  return <span className='red'>Bakiye yetersiz</span>;
};

export default StatusName;
