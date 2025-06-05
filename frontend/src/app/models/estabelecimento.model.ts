export class Estabelecimento{
  id?: number;
  cnpj: string;
  nome: string;
  email: string;
  senha: string;
  pais: string;
  estado: string;
  cep: string;
  cidade: string;
  endereco: string;
  complemento: string;
  telefone: string;
  dataCriacao?: Date;
  dataAtualizacao?: Date;

  constructor(init?: Partial<Estabelecimento>) {
    Object.assign(this, init);
  }
}
