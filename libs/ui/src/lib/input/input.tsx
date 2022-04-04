import { ChangeEvent, Ref } from 'react';

export interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement> | undefined) => void;
  elementRef?: Ref<HTMLInputElement>;
}

export function Input({
  placeholder,
  value,
  onChange,
  elementRef,
}: InputProps) {
  return (
    <input
      ref={elementRef}
      className={
        'py-2 border-gray-300 border-2 hover:outline-4 outline-offset-4'
      }
      placeholder={placeholder ?? 'placehoder'}
      onChange={onChange}
      value={value}
      type="text"
      name=""
      id=""
    />
  );
}

export default Input;
