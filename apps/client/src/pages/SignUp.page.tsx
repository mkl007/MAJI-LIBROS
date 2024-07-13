import { FormSigninComponent } from "../components/SignUpForm";
import { VerifyEmailModalComponent } from "../components/VerifyEmailModal.component";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const SignUpPage = () => {
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
          <h1 className="text-xl text-cyan-900">MAJIBOOKS</h1>
          <FormSigninComponent />
        </div>
      )}
    </div>
  );
};

export default SignUpPage;


