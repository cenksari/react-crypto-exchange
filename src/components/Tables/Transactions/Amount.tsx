// interfaces
interface IProps {
  type: number;
  amount: string;
}

const Amount = ({ type, amount }: IProps): JSX.Element => {
  if (type === 1) {
    return <strong className='red'>{amount}</strong>;
  }

  return <strong className='green'>{amount}</strong>;
};

export default Amount;
