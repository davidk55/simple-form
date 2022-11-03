import { useState } from 'react';

function FormInput(props) {
  const [focused, setFocused] = useState(false);

  function handleFocus() {
    setFocused(true);
  }

  return (
    <div className='flex flex-col justify-center w-full'>
      <label className='block mb-1'>{props.placeholder}</label>
      <input
        placeholder={props.placeholder}
        className='border rounded w-full py-1 px-2 bg-my-white peer aria-checked:invalid:border-red-500'
        value={props.value}
        onChange={props.handleChange}
        name={props.name}
        type={props.type}
        required={props.required}
        pattern={props.pattern}
        onBlur={handleFocus}
        aria-checked={focused.toString()}
        onFocus={() => props.name == 'confirmPassword' && setFocused(true)}
      />
      <span className='text-red-500 inline-block invisible peer-aria-checked:peer-invalid:visible h-16 py-2 text-xs md:text-sm'>
        {props.errorMessage}
      </span>
    </div>
  );
}

export default FormInput;
