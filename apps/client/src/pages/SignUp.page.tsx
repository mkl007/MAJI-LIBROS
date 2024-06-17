import { FormLoginComponent } from "../components/SignUpForm";

const SignUpPage = () => {
  return (
    <div className='w-full h-screen bg-midnight bg-slate-100'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm rounded-md'>
        <h1 className='text-xl text-cyan-900'>MAJIBOOKS</h1>
      </div>
      <FormLoginComponent />
    </div>

  )
};

export default SignUpPage;
