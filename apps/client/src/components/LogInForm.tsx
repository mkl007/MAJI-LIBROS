import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserToLogin } from '../interfaces/User.interface';
import { useAuth } from '../hooks/useAuth';
import { GithubButton } from './GithubButton.component';
import { LoadingSpinner } from '../utils/LoadingSnipper';
import { disabledInputStyle, notDisabledInputStyle } from './SignUpForm';
import { GoogleButton } from './GoogleButton.component';
import { string } from 'zod';
import { InputUI } from './ui/InputUI';
import { ButtonComponent } from './ui/ButtonComponent';






export const LogInFormComponent = () => {
    const { loginFunction, data, isLoggedIn, isLoading } = useAuth()
    const [user, setUser] = useState<UserToLogin>({ email: '', password: '' });

    const navegate = useNavigate()

    useEffect(() => {
        if (isLoggedIn) navegate('/')
    })

    function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        const newUser: UserToLogin = {
            email: user.email,
            password: user.password
        }
        loginFunction(newUser)
    }
    useEffect(() => {
        if (data?.message === 'Logged in') navegate('/profile')

    }, [data, navegate])
    return (
        <div className="  mb-3.5 bg-midnight pb-3 bg-stone-50 mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-md shadow-2xl">

            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-xl mt-10 text-center  md:text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Log in
                </h2>
            </div>


            <div className="container">
                <form onSubmit={handleSubmit} className="space-y-6" >
                    {isLoading ? <LoadingSpinner /> : ''}

                    <div className="mt-2">
                        <InputUI
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder='JohnDoe@gmail.com'
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            disabled={isLoading}
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
                        />
                    </div>

                    <div>
                        <ButtonComponent
                            onClick={() => console.log('')}
                            text='Log in'
                            type='submit'
                            className=" w-full justify-center rounded-md bg-green-600 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 lg:text-lg"


                        />
                    
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
                    You don't have account?
                    <Link to="/signup" className=" pl-2 font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

