import {TipoEstabelecimentoEnum} from "./enums/tipo-estabelecimento.enum";

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
  statusEstabelecimento?: boolean;
  tipoEstabelecimentoEnum: TipoEstabelecimentoEnum;
  logoEstabelecimentoUrl?: string;
  descricaoEstabelecimento?: string;

  constructor(init?: Partial<Estabelecimento>) {
    Object.assign(this, init);
  }
}
