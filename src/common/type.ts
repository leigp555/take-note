export interface Loginer {
  username: string;
  password: string;
}

export interface RegisterForm {
  username: string;
  email: string;
  securityCode: string;
  password: string;
  checkPass: string;
}
