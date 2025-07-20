import {Component, OnInit} from '@angular/core';
import {Evento} from "../../../../models/evento.model";
import {EventoService} from "../../../../services/evento.service";
import {Estabelecimento} from "../../../../models/estabelecimento.model";
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
  eventoSelecionado: Evento | null = null;
  estabelecimento: Estabelecimento = new Estabelecimento();

  /*Editar campos do evento*/
  mostrarAtualizarCampos = false;
  diaSemanaItens = Object.values(DiaSemanaEnum);
  generoMusicalItens = Object.values(GeneroMusicalEnum);
  statusEventoItens = Object.values(StatusEventoEnum);
  tipoEventoItens = Object.values(TipoEventoEnum);
  atualizando = false;

  constructor(private mainService: EventoService) {
  }

  ngOnInit(): void {
    this.listarEventosDoEstabelecimentoLogado();

  }

  listarEventosDoEstabelecimentoLogado(): void {
    this.mainService.listarEventosDoEstabelecimentoLogado().subscribe({
      next: (eventoList) => {
        this.eventos = eventoList;
        if (eventoList.length > 0) {
          this.evento = eventoList[0]; // Exibe o primeiro evento como exemplo
        }
        console.log('Eventos recebidos:', eventoList);
      },
      error: (err) => {
        console.error('Erro ao buscar eventos:', err);
        alert('Erro ao carregar eventos do seu estabelecimento.');
      }
    })
  }

  toggleDetalhes(evento: Evento) {
    if (this.eventoSelecionado === evento) {
      this.eventoSelecionado = null;
    } else {
      this.eventoSelecionado = evento;
    }
  }

  deletarEvento(id: string): void {
    if (confirm('tem certeza que deseja deletar este evento?')) {
      this.mainService.deletarEvento(id).subscribe({
        next: () => {
          this.eventos = this.eventos.filter(evento => evento.id !== id);
          alert("Evento deletado com sucesso!");
        },
        error: (err) => {
          console.error('Erro ao excluir evento:', err);
          alert('Erro ao excluir o evento.');
        }
      })
    }
  }

  atualizarDataHoraInicio(event: any): void {
    this.evento.dataHoraInicio = new Date(event.value);
  }

  atualizarDataHoraFim(event: any): void {
    this.evento.dataHoraFim = new Date(event.value);
  }

  cancelarEdicao() {
    this.mostrarAtualizarCampos = false
  }

  AtualizarEvento(evento1: Evento) {
    this.atualizando = true;
    this.mainService.editarEvento(evento1).subscribe({
      next: () => {
        alert("Evento atualizado com sucesso!");
        this.atualizando = false;
      },
      error: (err) => {
        console.error('Erro ao atualizar evento:', err);
        alert('Erro ao atualizar o evento.');
      }
    })
  };

  abrirEditarEvento(id: string) {
    const eventoEncontrado = this.eventos.find(e => e.id === id);
    if (eventoEncontrado) {
      this.evento = {...eventoEncontrado};
      this.mostrarAtualizarCampos = true;
    }
  }
}
