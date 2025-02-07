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
    <div className="w-full h-screen bg-slate-100">
      {showModal && data?.message ? (
        <VerifyEmailModalComponent message={`${data?.message}`} onClose={handleModalClose} />
      ) : (
        <div className="sm:mx-auto sm:w-full sm:max-w-sm rounded-md">
          <div className='bg-gray-800 px-4 pt-4 lg:bg-slate-100 lg: items-center justify-center'>
            <H1 message="MAJIBOOKS" />
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
