import { useState } from 'react';
import FormInput from './FormInput';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'firstName',
      type: 'text',
      placeholder: 'First Name',
      label: 'First Name',
      required: true,
      errorMessage: 'You should not use numbers or special characters.',
      pattern: '^[A-Za-z]{2,30}$',
    },
    {
      id: 2,
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name',
      label: 'Last Name',
      required: true,
      errorMessage: 'You should not use special characters.',
      pattern: '^[A-Za-z]{2,30}$',
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      required: true,
      errorMessage: 'Enter valid email address.',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      required: true,
      errorMessage:
        'The password should be 8-30 characters and include at least 1 lower case letter, 1 upper case letter, 1 number and 1 special character.',
      pattern:
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,30}$',
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      required: true,
      errorMessage: 'The passwords do not match.',
      pattern: formData.password,
    },
  ];

  function handleSubmit(event) {
    event.preventDefault();
    // submit to API
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  }

  const remainingElements = inputs
    .slice(2)
    .map((input) => (
      <FormInput
        key={input.id}
        {...input}
        handleChange={handleChange}
        value={formData[input.name]}
      />
    ));

  return (
    <form
      onSubmit={handleSubmit}
      className='m-auto flex max-h-screen w-full flex-col justify-center bg-my-white px-12 py-6 font-my-font md:max-w-xl md:rounded-2xl'
    >
      <h1 className='mb-6 text-center text-3xl font-light tracking-wider'>
        Create Account
      </h1>
      <div className='flex flex-col gap-6 md:flex-row'>
        <FormInput
          key={inputs[0].id}
          {...inputs[0]}
          handleChange={handleChange}
          value={formData[inputs[0].name]}
        />
        <FormInput
          key={inputs[1].id}
          {...inputs[1]}
          handleChange={handleChange}
          value={formData[inputs[1].name]}
        />
      </div>
      {remainingElements}
      <button
        className='mt-2 mb-1 rounded bg-blue-900 py-2 font-bold text-white'
        type='submit'
      >
        Create Account
      </button>
      <button className='text-sm' type='button'>
        Already have an Account?
      </button>
    </form>
  );
}

export default Form;
