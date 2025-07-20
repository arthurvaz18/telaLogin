import {DiaSemanaEnum} from "./enums/dia-semana-enum";
import {Estabelecimento} from "./estabelecimento.model";
import {GeneroMusicalEnum} from "./enums/genero-musical.enum";
import {StatusEventoEnum} from "./enums/status-evento.enum";
import {TipoEventoEnum} from "./enums/tipo-evento.enum";

export class Evento {
  id: string;
  titulo: string;
  descricao: string;
  atracao: string;
  dataCriacao: Date;
  dataAtualizacao: Date;
  dataHoraInicio: Date;
  dataHoraFim: Date;
  diaSemanaInicio: DiaSemanaEnum;
  imagem: string;
  lotacaoPessoa: number;
  estabelecimento: Estabelecimento
  generoMusicalEnum: GeneroMusicalEnum;
  statusEventoEnum: StatusEventoEnum;
  tipoEventoEnum: TipoEventoEnum;


  constructor(init?: Partial<Evento>) {
    Object.assign(this, init);
  }
}
