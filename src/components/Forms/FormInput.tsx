// interfaces
interface IProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const FormInput = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  onKeyDown,
}: IProps): JSX.Element => (
  <input
    id={name}
    name={name}
    type={type}
    value={value}
    autoComplete='off'
    onChange={onChange}
    onKeyDown={onKeyDown}
    placeholder={placeholder}
  />
);

export default FormInput;
