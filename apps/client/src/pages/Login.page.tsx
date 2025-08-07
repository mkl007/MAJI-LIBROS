import { Footer } from '../components';
import { LogInFormComponent } from '../components/LogInForm';
import { Link } from 'react-router-dom';
import { H1 } from '../components/ui/H1';



export const LoginPage = () => {

  return (
    <div>

      <div className='w-full bg-midnight'>
        <div className=''>
          <div className='bg-gray-800 px-4 pt-4 lg:bg-white lg: items-center justify-center'>

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


