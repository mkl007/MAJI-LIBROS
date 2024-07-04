import LogInFormComponent from '../components/LogInForm';

const LoginPage = () => {


  return (
    <div>

      <div className='w-full h-screen bg-midnight bg-slate-100'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm rounded-md'>
          <h1 className='text-xl text-cyan-900'>MAJIBOOKS</h1>
        </div>
        <LogInFormComponent />
      </div>

    </div >
  )
};

export default LoginPage;
