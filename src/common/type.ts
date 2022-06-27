export interface Loginer {
  username: string;
  password: string;
  avatar_url: string;
}

export interface RegisterForm {
  username: string;
  email: string;
  securityCode: string;
  password: string;
  checkPass: string;
}

export interface Article {
  owner: string;
  title: string;
  body: string;
  state: string;
  isPublic: string;
  identity_number: string;
}
