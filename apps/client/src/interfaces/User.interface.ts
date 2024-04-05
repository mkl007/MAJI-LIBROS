export interface User {
  fullname: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

export interface ApiResponse {
  message: string;
  Status: number,
  data: unknown
}
