// interfaces
interface IProps {
  type: number;
}

const ProcessType: React.FC<IProps> = ({ type }) => {
  if (type === 1) {
    return (
      <div className='nowrap'>
        <div className='icon green'>
          <i className='material-icons'>arrow_upward</i>
        </div>
        <strong>Deposit</strong>
      </div>
    );
  }

  return (
    <div className='nowrap'>
      <div className='icon red'>
        <i className='material-icons'>arrow_downward</i>
      </div>
      <strong>Withdraw</strong>
    </div>
  );
};

export default ProcessType;
