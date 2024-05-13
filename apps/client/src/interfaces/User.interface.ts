export interface User {
  fullname: string | undefined;
  email: string | undefined;
  password: string | undefined;
}

export interface ApiResponse{
  data?: Array<Array<{ message: string } | undefined>>;
  status: number,
}


export interface ModalProps {
  fullname: string | undefined,
  email: string | undefined,
  message?: string 
}
