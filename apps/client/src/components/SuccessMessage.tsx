import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const SuccessMessage = (message: string, status: number) => {
    toast.success(message);

    return (
        <div>
            {status === 200 && <ToastContainer />}
        </div>
    );
};
