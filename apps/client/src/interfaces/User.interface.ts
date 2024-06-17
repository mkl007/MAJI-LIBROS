export interface ApiResponse {
  token: string;
  message: string;
  userInfo: UserInfo & UserInfoGithubCredential;
}

export interface UserContextInterface {
  data: ApiResponse | null;
  signUpFunction: (user: UserToSignUp) => Promise<void>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loginFunction: (user: UserToLogin) => Promise<void>;
  getUserInfo: (token: string) => Promise<void>;
  isLoggedIn: boolean
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

interface UserInfo {
  email: string;
  fullname: string;
  virified: boolean;
  id: string;
}

interface UserInfoGithubCredential {
  accountID: string;
  createdAt: string;
  displayName: string;
  email: string;
  fullname: string;
  provider: string;
  updatedAt: string;
  userAvatar: string;
  verified: boolean;
  _id: string;
}
