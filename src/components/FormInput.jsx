function FormInput(props) {
  return (
    <div className='flex flex-col justify-center w-full'>
        onChange={props.handleChange}
        name={props.name}
        type={props.type}
    </div>
  );
}

export default FormInput;
