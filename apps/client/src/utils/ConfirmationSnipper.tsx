import { CheckCircleIcon } from "@heroicons/react/24/solid"


export const ConfirmationSnipper = () => {
    return (
        <div className="transition duration-75 fixed inset-0 flex items-center justify-center">
            <div className="relative">
                <div className="absolute top-0 left-0 w-16 h-16">
                    <CheckCircleIcon className="w-16 h-16 text-green-600" />
                </div>
            </div>
        </div>
    )
}
