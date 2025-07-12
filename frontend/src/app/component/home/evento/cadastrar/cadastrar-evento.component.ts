import {Component, OnInit} from '@angular/core';
import {Evento} from "../../../../models/evento.model";
import {DiaSemanaEnum} from "../../../../models/enums/dia-semana-enum";
import {GeneroMusicalEnum} from "../../../../models/enums/genero-musical.enum";
import {StatusEventoEnum} from "../../../../models/enums/status-evento.enum";
import {EventoService} from "../../../../services/evento.service";
import {TipoEventoEnum} from "../../../../models/enums/tipo-evento.enum";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-cadastrar-evento',
  templateUrl: './cadastrar-evento.component.html',
  styleUrls: ['./cadastrar-evento.component.scss']
})
export class CadastrarEventoComponent implements OnInit {
  diaSemanaItens = Object.values(DiaSemanaEnum);
  generoMusicalItens = Object.values(GeneroMusicalEnum);
  statusEventoItens = Object.values(StatusEventoEnum);
  tipoEventoItens = Object.values(TipoEventoEnum);
  evento: Evento = new Evento();

  modoEdicao = false;

  constructor(private mainService: EventoService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  cadastrarEvento(): void {

    this.mainService.criarEvento(this.evento).subscribe({
      next: () => {
        this.evento = new Evento();
        alert('Evento Criado com sucesso!')
      },
      error: (erro) => {
        alert('Erro ao cadastrar evento, verifique os campos corretamente!.');
      }
    })

  }

  ativarEdicao(): void {
    this.modoEdicao = true;
  }

  cancelarEdicao() {
    this.modoEdicao = false;
  }

  atualizarDataHoraInicio(event: any): void {
    this.evento.dataHoraInicio = new Date(event.value);
  }

  atualizarDataHoraFim(event: any): void {
    this.evento.dataHoraFim = new Date(event.value);
  }

}
