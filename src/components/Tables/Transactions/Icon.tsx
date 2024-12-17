// interfaces
interface IProps {
  type: number;
}

const Icon: React.FC<IProps> = ({ type }) => {
  if (type === 1) {
    return (
      <div className='operation red'>
        <i className='material-icons'>arrow_upward</i>
      </div>
    );
  }

  return (
    <div className='operation green'>
      <i className='material-icons'>arrow_downward</i>
    </div>
  );
};

export default Icon;
