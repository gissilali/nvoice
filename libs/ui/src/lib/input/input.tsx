import { ChangeEvent, Ref } from 'react';

export interface InputProps {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement> | undefined) => void;
  elementRef?: Ref<HTMLInputElement>;
  id: string;
  label: string;
}

export function Input({
  placeholder,
  value,
  onChange,
  elementRef,
  id,
  label,
}: InputProps) {
  return (
    <div className="relative">
      <input
        ref={elementRef}
        className="peer block placeholder-transparent 
        bg-white 
        text-slate-700
        font-light	
        border-gray-300 
        border
         focus:border-blue-500 
        rounded px-4 py-2 focus:outline-none"
        placeholder={placeholder ?? 'placehoder'}
        onChange={onChange}
        value={value}
        name=""
        id={id}
      />
      <label
        htmlFor={id}
        className="
        text-xs ml-2 px-1  transition-all -top-2 text-slate-700

        peer-placeholder-shown:top-2
        peer-placeholder-shown:bg-transparent 
        peer-placeholder-shown:text-base
        peer-placeholder-shown:px-0
        peer-placeholder-shown:text-gray-400
        peer-placeholder-shown:font-normal
        peer-placeholder-shown:ml-4


        peer-focus:px-1
        peer-focus:bg-white
        peer-focus:text-xs
        peer-focus:-top-2
        peer-focus:ml-2
        peer-focus:text-slate-700

        
        bg-white absolute"
      >
        {placeholder}
      </label>
    </div>
  );
}

export default Input;
