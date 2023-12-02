export interface ILoginResponse {
  status: string;
  token: string;
  image: string;
}

export interface IRequestVerifiction {
  status: string;
  message: string;
  email: string;
  token: string;
}
