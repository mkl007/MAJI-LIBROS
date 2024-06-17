import { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserToSignUp } from '../interfaces/User.interface';
// import { signUpRequest } from '../api/auth';
import { useAuth } from '../hooks/useAuth';
import { GithubButton } from '../components/GithubButton.component';



const FormLoginComponent = () => {
  const [user, setUser] = useState<UserToSignUp>({ fullname: '', email: '', password: '' });

  const { data, signUpFunction } = useAuth()

  async function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();
    await signUpFunction(user);

  }

  console.log(data)
  return (
    // <div className="container bg-midnight bg-stone-300">
    <div className=" container mb-3.5 bg-midnight bg-stone-50 mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-md border-0 border-neutral-800 shadow-2xl">

      {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 container border-3 border-fuchsia-800"> */}
      {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className=""
            src="../../public/logo-no-bg.png"
            alt="Maji Book"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          </h2>
        //// this is section is commited because the form is not needed in this component.
        </div>  */}


      {/* <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-1 border-neutral-800 shadow-2xl"> */}
      <div className="container">
        <div><h1>Signup</h1></div>
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

              // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus: border-sky-400  sm:text-sm sm:leading-6"
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

              // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

              // className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>

            <div
              className="flex w-full justify-center rounded-md bg-zinc-950 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-zinc-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <GithubButton />
            </div>

          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have an accoun?{' '}
          <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

const SignUpPage = () => {
  return (
    <div className='w-full h-screen bg-midnight bg-cyan-700 border-3 border-fuchsia-800'>
      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <h1 className='text-xl text-cyan-50'>MAJIBOOKS</h1>
      </div>
      <FormLoginComponent />
    </div>
  )
};

export default SignUpPage;
