import FormInput from './FormInput';
function App() {
  function handleSubmit(event) {
    event.preventDefault();
    // submit to API
  }
  return (
    <form
      onSubmit={handleSubmit}
      className='flex max-h-screen w-full flex-col justify-center bg-my-white px-12 py-6 font-my-font md:max-w-xl md:rounded-2xl'
    >
      <h1 className='mb-6 text-center text-3xl font-light tracking-wider'>
        Create Account
      </h1>
      <div className='flex flex-col gap-6 md:flex-row'>
        <FormInput
          handleChange={handleChange}
        />
        <FormInput
          handleChange={handleChange}
        />
      </div>
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

export default App;
