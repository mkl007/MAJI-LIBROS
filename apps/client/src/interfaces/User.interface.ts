///////////////////////// new structure:

export interface ApiResponse {
  token: string;
  message: string;
  userInfo: UserInfo;
}

export interface UserContextInterface {
  data: ApiResponse  | null;
  signUpFunction: (user: UserToSignUp) => Promise<void>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loginFunction: (user: UserToLogin) => Promise<void>;
  getUserInfo: (token: string) => Promise<void>;
}

export interface UserToSignUp {
  fullname: string;
  email: string;
  password: string;
}

export interface UserToLogin {
  email: string | undefined;
  password: string | undefined;
}

// export interface GetuserInfoInterface {
//   data: {
//     fullname: string;
//     email: string;
//     id: string;
//   };
// }

interface UserInfo {
  email: string;
  fullname: string;
  virified: boolean;
  id: string;
}
