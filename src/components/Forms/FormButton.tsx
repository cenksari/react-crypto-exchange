// interfaces
interface IProps {
  text: string;
}

const FormButton: React.FC<IProps> = ({ text }) => (
  <button type='submit' className='button button-purple button-medium'>
    {text}
  </button>
);

export default FormButton;
