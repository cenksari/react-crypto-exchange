import React from 'react';

// interfaces
interface IProps {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput = ({ type, name, value, placeholder, onChange }: IProps): React.JSX.Element => (
  <input
    id={name}
    name={name}
    type={type}
    value={value}
    autoComplete='off'
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default FormInput;
