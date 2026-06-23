import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useSignUpForm } from '../hooks/useSignUpForm';
import { GithubButton } from './GithubButton.component';
import { GoogleButton } from './GoogleButton.component';
import { FormField } from './FormField';
import { MiniLoadingSpinner } from '../utils/MiniLoadingSnipper';
import { toast, ToastContainer } from 'react-toastify';
import { VerifyEmailModalComponent } from './VerifyEmailModal.component';
import { BUTTON_STYLES } from './formStyles.constant';

const FORM_FIELDS = [
  { id: 'fullname', type: 'text', placeholder: 'Full Name' },
  { id: 'email', type: 'email', placeholder: 'Email' },
  { id: 'password', type: 'password', placeholder: 'Password' },
] as const;

export const FormSigninComponent = () => {
  const { user, errors, updateField, validateForm, reset } = useSignUpForm();
  const { signUpFunction, setIsLoading, isLoading, isLoggedIn, error, data } = useAuth();
  const [showModal, setShowModal] = useState(!!data?.message);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) navigate('/');
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  useEffect(() => {
    setShowModal(!!data?.message);
  }, [data?.message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all fields correctly');
      return;
    }

    setIsLoading(true);
    try {
      await signUpFunction(user);
      reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mb-3.5 bg-stone-50 mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded-md shadow-2xl pb-3">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="text-xl md:text-2xl font-bold font-type  text-center leading-9 tracking-tight text-gray-900 mt-10">
          Sign Up
        </h2>
      </div>

      {showModal && data?.message && (
        <VerifyEmailModalComponent message={data.message} onClose={() => setShowModal(false)} />
      )}

      <div className="container p-6">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {FORM_FIELDS.map(({ id, type, placeholder }) => (
            <FormField
              key={id}
              id={id}
              type={type}
              value={user[id as keyof typeof user]}
              error={errors[id as keyof typeof errors]}
              disabled={isLoading}
              placeholder={placeholder}
              onChange={(value) => updateField(id as keyof typeof user, value)}
            />
          ))}

          <button type="submit" disabled={isLoading} className={BUTTON_STYLES.submit}>
            {isLoading ? <MiniLoadingSpinner /> : 'Sign Up'}
          </button>

          <div className="flex items-center gap-4">
            <span className="flex-1 border-b border-gray-300"></span>
            <span className="text-gray-500 text-sm">or</span>
            <span className="flex-1 border-b border-gray-300"></span>
          </div>

          
          <div className="flex flex-col space-y-3 md:flex-row md:justify-between md:space-x-4 md:space-y-0">
            <GoogleButton />
            <GithubButton />
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500 font-type">
          Already have an account?
          <Link to="/login" className="pl-2 font-semibold text-indigo-600 hover:text-indigo-500">
            Log in
          </Link>
        </p>
      </div>

      <ToastContainer />
    </div>
  );
};

