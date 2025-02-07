import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserToSignUp } from '../interfaces/User.interface';
import { useAuth } from '../hooks/useAuth';
import { GithubButton } from '../components/GithubButton.component';
import { LoadingSpinner } from '../utils/LoadingSnipper';
import { GoogleButton } from './GoogleButton.component';
import { InputUI } from './ui/InputUI';

export const notDisabledInputStyle = "block w-full rounded-md border-2 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm placeholder-gray-500 focus:border-sky-900 sm:text-sm sm:leading-6"
export const disabledInputStyle = "block w-full rounded-md bg-gray-300 border-2 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm placeholder-gray-500 focus:border-sky-900 sm:text-sm sm:leading-6 "
export const notDisabledButtonStyle = 'flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'

export const FormSigninComponent = () => {
  const [user, setUser] = useState<UserToSignUp>({ fullname: '', email: '', password: '' });
  const { signUpFunction, setIsLoading, isLoading, isLoggedIn } = useAuth()
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate('/')
  })


  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setIsLoading(true)
    await signUpFunction(user);
    setIsLoading(false)
  }
  return (

    <div className="  mb-3.5 bg-midnight pb-3 bg-stone-50 mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-md border-0 border-neutral-800 shadow-2xl">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-xl mt-10 text-center  md:text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in
        </h2>
      </div>


      <div className="container">
        <form onSubmit={handleSubmit} className="space-y-6" >
          {isLoading ? <LoadingSpinner /> : ''}
          <div className="relative mt-2">
            <InputUI
              id="fullname"
              name="fullname"
              type="fullname"
              autoComplete="fullname"
              required
              placeholder='John Doe'
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              disabled={isLoading}
            />
          </div>



          <div className="mt-2">
            <InputUI
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder='JohnDoe@gmail.com'
              disabled={isLoading}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className={`${isLoading ? disabledInputStyle : notDisabledInputStyle}`}

            />

          </div>


          <div className="mt-2">
            <InputUI
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder='Password'
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              disabled={isLoading}
              className={`${isLoading ? disabledInputStyle : notDisabledInputStyle}`}
            />

          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`${notDisabledButtonStyle}`}
            >
              Sign in
            </button>
            <div className="flex items-center justify-between my-1">
              <span className="border-b border-gray-300 w-full"></span>
              <span className="px-4 text-gray-500">or</span>
              <span className="border-b border-gray-300 w-full"></span>
            </div>

            <div className='flex flex-col space-y-4'>
              <GoogleButton />
              <GithubButton />
            </div>

          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an account?
          <Link to="/login" className="pl-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

