// interfaces
interface IProps {
  status: number;
}

const StatusName: React.FC<IProps> = ({ status }) => {
  if (status === 1) {
    return <span className='green'>Bitmiş</span>;
  }

  if (status === 2) {
    return <span className='red'>Başarısız</span>;
  }

  return <span className='gray'>Bekliyor</span>;
};

export default StatusName;
