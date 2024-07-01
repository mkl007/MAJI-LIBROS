import { useEffect } from 'react';
import LogInFormComponent from '../components/LogInForm';
import { useAuth } from '../hooks/useAuth';
import { useGetToken } from '../hooks/useGetToken';

const LoginPage = () => {
  const { data, getUserInfo, isLoading, setIsLoading, isLoggedIn } = useAuth()
  const token = useGetToken();
  useEffect(() => {
    if (token != null) {
        setIsLoading(true);


        getUserInfo(token).then(() => {
            setIsLoading(false);
        });
    }
}, [token]);

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
