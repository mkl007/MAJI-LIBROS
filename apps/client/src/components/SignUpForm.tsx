import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserToSignUp } from '../interfaces/User.interface';
// import { signUpRequest } from '../api/auth';
import { useAuth } from '../hooks/useAuth';
import { GithubButton } from '../components/GithubButton.component';

export const LoadingSnipper = () => {
  return (
    <div>
      loading
    </div>
  )
}

export const FormLoginComponent = () => {
  const [user, setUser] = useState<UserToSignUp>({ fullname: '', email: '', password: '' });

  const { signUpFunction, setIsLoading } = useAuth()

  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    setIsLoading(true)
    await signUpFunction(user);
    setIsLoading(false)
  }
  return (

    <div className=" container mb-3.5 bg-midnight pb-3 bg-stone-50 mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-md border-0 border-neutral-800 shadow-2xl">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in
        </h2>
      </div>


      <div className="container">
        <form onSubmit={handleSubmit} className="space-y-6" >
          <div>

            <div className="mt-2">
              <input
                id="fullname"
                name="fullname"
                type="fullname"
                autoComplete="fullname"
                required
                placeholder='Fullname'
                onChange={(e) => setUser({ ...user, fullname: e.target.value })}
                className="block w-full rounded-md border-2 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm placeholder-gray-500 focus:border-sky-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>

            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder='Email'
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className="block w-full rounded-md border-2 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm placeholder-gray-500 focus:border-sky-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>

            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                placeholder='Password'
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                className="block w-full rounded-md border-2 border-gray-300 py-1.5 px-3 text-gray-900 shadow-sm placeholder-gray-500 focus:border-sky-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
            <div
            >
              <GithubButton />
            </div>

          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an accoun?
          <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

