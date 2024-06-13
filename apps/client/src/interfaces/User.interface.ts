// export interface ApiResponse{
//   data?: Array<Array<{ message: string } | undefined>>;
//   status: number,
// }

export interface ModalProps {
  fullname: string | undefined;
  email: string | undefined;
  message?: string;
}

export interface Message {
  message: string;
}

export interface RegisterResponse {
  data: { message: string };
  status: number;
}

export interface AuthContextInterface {
  isLoggedIn: boolean | null;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
  Apitesting: Promise<RegisterResponse>;
}

///////////////////////// new structure:

export interface ApiResponse {
  token: string;
  message: string;
}

export interface UserContextInterface {
  data: ApiResponse | null;
  signUpFunction: (user: UserToSignUp) => Promise<void>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loginFunction: (user: UserToLogin) => Promise<void>;
}

export interface UserToSignUp {
  fullname: string;
  email: string;
  password: string;
}

export interface UserToLogin {
  email: string | undefined;
  password: string | undefined
}