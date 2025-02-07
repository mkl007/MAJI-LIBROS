import { LogInFormComponent } from '../components/LogInForm';
import { Link } from 'react-router-dom';

export const LoginPage = () => {

  return (
    <div>

      <div className='w-full h-screen bg-midnight bg-slate-100'>
        <div className='sm:mx-auto sm:w-full sm:max-w-sm rounded-md'>
          <div className=' bg-blue-950 px-4 pt-4 lg:'>
            <h1 className='text-xl text-slate-50'>
              <Link
                to={'/'}
              >MAJIBOOKS
              </Link>
            </h1>
          </div>

        </div>
        <div className='container'>
          <LogInFormComponent />

        </div>
      </div>

    </div >
  )
};


