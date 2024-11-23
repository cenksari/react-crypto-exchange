// interfaces
interface IProps {
  name: string;
  text: string;
  checked: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormCheckbox = ({ name, text, onChange, checked }: IProps): JSX.Element => (
  <label className='checkbox-container'>
    {text}
    <input
      value='0'
      id={name}
      name={name}
      type='checkbox'
      onChange={onChange}
      defaultChecked={checked}
    />
    <span className='checkmark' />
  </label>
);

export default FormCheckbox;
