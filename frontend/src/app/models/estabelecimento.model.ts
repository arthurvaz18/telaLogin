import {TipoEstabelecimentoEnum} from "./enums/tipo-estabelecimento.enum";
import {DiaSemanaEnum} from "./enums/dia-semana-enum";
import {Evento} from "./evento.model";

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
  statusEstabelecimento?: boolean;
  tipoEstabelecimentoEnum: TipoEstabelecimentoEnum;
  logoEstabelecimentoUrl?: string;
  descricaoEstabelecimento?: string;
  dataCriacao?: Date;
  dataAtualizacao?: Date;
  diaSemanaInicio?: DiaSemanaEnum;
  diaSemanaFim?: DiaSemanaEnum;
  horaAbertura?: string;
  horaFechamento?: string;
  evento:Evento;

  constructor(init?: Partial<Estabelecimento>) {
    Object.assign(this, init);
  }
}
