export interface LoginRequest {
  email: string;
  senha: string;
}

export interface AuthResponse {
  token: string;
  idEstabelecimento: number;
  nomeEstabelecimento: string;
}
