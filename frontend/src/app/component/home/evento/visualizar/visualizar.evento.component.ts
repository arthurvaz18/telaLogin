import {Component, OnInit} from '@angular/core';
import {Evento} from "../../../../models/evento.model";
import {EventoService} from "../../../../services/evento.service";
import {AuthService} from "../../../../services/auth/auth.service";
import {DiaSemanaEnum} from "../../../../models/enums/dia-semana-enum";
import {GeneroMusicalEnum} from "../../../../models/enums/genero-musical.enum";
import {StatusEventoEnum} from "../../../../models/enums/status-evento.enum";
import {TipoEventoEnum} from "../../../../models/enums/tipo-evento.enum";

@Component({
  selector: 'app-visualizar-evento',
  templateUrl: './visualizar.evento.component.html',
  styleUrls: ['./visualizar.evento.component.scss']
})
export class VisualizarEventoComponent implements OnInit {
  evento: Evento = new Evento();
  eventos: Evento[] = [];
  diaSemanaItens = Object.values(DiaSemanaEnum);
  generoMusicalItens = Object.values(GeneroMusicalEnum);
  statusEventoItens = Object.values(StatusEventoEnum);
  tipoEventoItens = Object.values(TipoEventoEnum);

  modoEdicao = false;
  eventoSelecionado: Evento | null = null;

  constructor(private mainService: EventoService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.listarEventosDoEstabelecimentoLogado();
  }

  listarEventosDoEstabelecimentoLogado():void{
    this.mainService.listarEventosDoEstabelecimentoLogado().subscribe({
      next:(eventoList) =>{
        this.eventos = eventoList;
        if (eventoList.length > 0) {
          this.evento = eventoList[0]; // Exibe o primeiro evento como exemplo
        }
      },
      error: (err) => {
        console.error('Erro ao buscar eventos:', err);
        alert('Erro ao carregar eventos do seu estabelecimento.');
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

  toggleDetalhes(evento: Evento) {
    if (this.eventoSelecionado === evento) {
      this.eventoSelecionado = null;
    } else {
      this.eventoSelecionado = evento;
    }
  }

}
