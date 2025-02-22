

interface ConfirmationAndMessageComponentProps {
    isLoading: boolean;
    message: string;
}

export const ConfirmationAndMessageComponent = ({ isLoading, message }: ConfirmationAndMessageComponentProps) => {
    console.log("All of this from here ",isLoading, message)
    return (
        <div>
            {
                <div><p>hi from here</p></div>
                
            }
        </div>
    )
}
