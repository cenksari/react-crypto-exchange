// interfaces
interface IProps {
  type: string;
  text: string;
  onClick: (e: React.FormEvent) => void;
}

const FormButton = ({ type, text, onClick }: IProps): JSX.Element => (
  <button
    onClick={onClick}
    type={type === 'submit' ? 'submit' : 'button'}
    className='button button-purple button-medium'
  >
    {text}
  </button>
);

export default FormButton;
