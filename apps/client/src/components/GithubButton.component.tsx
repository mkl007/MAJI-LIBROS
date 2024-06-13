import instanceAxios from "../api/axiosSetup";


export const GithubButton = () => {
    
    const handleLogin = () => {
        // window.location.href = 'http://localhost:3000/auth/github';
        window.location.href = `http://localhost:3000/api/v1/auth/github/`
        // window.location.href = `${instanceAxios}/auth/github/callback`
        
    };
    return (
        <div>
            <button onClick={handleLogin}
            className="flex border-3 border-red-500"
            >
                Login with GitHub
            </button>
        </div>
    );
}
