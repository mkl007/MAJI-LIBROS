import { Footer } from '../components';
import { LogInFormComponent } from '../components/LogInForm';
import { Link } from 'react-router-dom';

interface H1Props {
  message: string
}

export const H1 = ({ message }: H1Props) => {
  return (

    <h1
      // className='text-lg font-bold text-slate-50  lg:text-xl xl:text-2xl 2xl:text-3xl'>
      className='title'> {message}</h1>
  )
}

export const LoginPage = () => {

  return (
    <div>

      <div className='w-full border-2 border-e-red-500 bg-midnight bg-slate-100'>
        <div className=''>
        {/* <div className='sm:mx-auto sm:w-full sm:max-w-sm rounded-md'> */}
          <div className='bg-gray-800 px-4 pt-4 lg:bg-slate-100 lg: items-center justify-center'>
            <Link
              to={'/'}
            >
              <H1 message='MAJIBOOKS' />
            </Link>
          </div>

        </div>
        <div className='container'>
          <LogInFormComponent />
        </div>

      </div>
      <div className='lg:hidden'>
        <Footer />

      </div>
    </div >
  )
};


