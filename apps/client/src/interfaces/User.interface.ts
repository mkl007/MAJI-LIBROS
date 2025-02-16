export interface ApiResponse {
  token: string;
  message: string;
  userInfo: UserInfo & UserInfoGithubCredential ;
}
export interface UserData {
  userInfo: UserInfo & UserInfoGithubCredential
}

export interface UserContextInterface {
  user: UserData | undefined
  data: ApiResponse | null;
  signUpFunction: (user: UserToSignUp) => Promise<void>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loginFunction: (user: UserToLogin) => Promise<void>;
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  googleSignIn: () => Promise<void>;
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
  _id: string;
  role: string;
  // userAvatar?: string;
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
  role: string;
}

export interface Book {
  _id: string;
  bookTitle: string;
  author: string;
  description?: {
    publishedYear: number;
  };
  gender?: string;
  coverImage: string | null;
  availabilityStatus: string;
  price?: number;
}

export interface BookReal {
  _id?: string;
  bookTitle: string;
  author: string;
  description?: {
    publishedYear: number;
  };
  gender?: string;
  coverImage: string | null;
  availabilityStatus: string;
  price?: number;
}

export interface FeedItemProps {
  _id?: string;
  bookTitle: string;
  author: string;
  coverImage: string | null;
  availabilityStatus: string;
  price?: number;
}
