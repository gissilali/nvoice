import { ChangeEvent, Ref } from 'react';

export enum InputType {
  text = 'text',
  password = 'password',
  email = 'email',
  number = 'number',
}

export interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement> | undefined) => void;
  elementRef?: Ref<HTMLInputElement>;
  id: string;
  label: string;
  type: InputType;
  required?: boolean;
  error?: string;
}

export function Input({
  type = InputType.text,
  placeholder,
  value,
  onChange,
  elementRef,
  id,
  label,
  required = false,
  error,
}: InputProps) {
  return (
    <div>
      <div className="relative">
        <input
          required={required}
          ref={elementRef}
          className="peer block placeholder-transparent 
        bg-white 
        text-slate-700
        	w-full
        border-gray-300 
        border
        antialiased
         focus:border-blue-700
         focus:ring-1
         focus:ring-inset
         focus:ring-blue-700
        rounded-lg px-4 py-2 focus:outline-none"
          placeholder={placeholder ?? 'placehoder'}
          onChange={onChange}
          value={value}
          name=""
          id={id}
          type={type}
        />
        <label
          htmlFor={id}
          className="
        text-xs font-semibold ml-2 px-1 transition-all ease-in -top-2 text-slate-700

        peer-placeholder-shown:top-3
        peer-placeholder-shown:bg-transparent 
        peer-placeholder-shown:text-sm
        peer-placeholder-shown:px-0
        peer-placeholder-shown:text-gray-400
        peer-placeholder-shown:font-normal
        peer-placeholder-shown:ml-4


        peer-focus:px-1
        peer-focus:bg-white
        peer-focus:text-xs
        peer-focus:-top-2
        peer-focus:ml-2
        peer-focus:font-semibold
        peer-focus:text-slate-700

        
        bg-white absolute"
        >
          {placeholder}
        </label>
      </div>
      {error && (
        <div className="text-red-500 font-medium text-xs mt-1">{error}</div>
      )}
    </div>
  );
}

export default Input;
