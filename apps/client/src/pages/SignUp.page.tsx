import { Link } from "react-router-dom";
import { Footer } from "../components";
import { FormSigninComponent } from "../components/SignUpForm";
import { H1 } from "../components/ui/H1";
import { VerifyEmailModalComponent } from "../components/VerifyEmailModal.component";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

export const SignUpPage = () => {
  const { data } = useAuth();
  const [showModal, setShowModal] = useState(true);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className='w-full bg-midnight '>

      {showModal && data?.message ? (
        <VerifyEmailModalComponent message={`${data?.message}`} onClose={handleModalClose} />
      ) : (
        <div className="">
          <div className='bg-gray-800 px-4 pt-4 lg:bg-white lg: items-center justify-center'>
            <Link
              to={'/'}
            >
              <H1 message='MAJIBOOKS' />
            </Link>
          </div>
          <FormSigninComponent />
        </div>
      )}
      <div className='lg:hidden'>
        <Footer />
      </div>
    </div>
  );
};
