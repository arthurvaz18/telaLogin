import {Component, OnInit} from '@angular/core';
import {Estabelecimento} from "../../../../models/estabelecimento.model";
import {CadastroService} from "../../../../services/cadastro.service";
import {TipoEstabelecimentoEnum} from "../../../../models/enums/tipo-estabelecimento.enum";
import {DiaSemanaEnum} from "../../../../models/enums/dia-semana-enum";

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  estabelecimento: Estabelecimento = new Estabelecimento();
  tipoEstabelecimentoEnum = Object.values(TipoEstabelecimentoEnum);
  diaSemanaEnum = Object.values(DiaSemanaEnum);

  modoEdicao = false;

  constructor(private cadastroService: CadastroService) {
  }

  ngOnInit(): void {
    const email = localStorage.getItem('emailEstabelecimento');
    if (email) {
      this.cadastroService.buscarEstabelecimentoPorEmail(email).subscribe({
        next: (dados) => {
          this.estabelecimento = dados;
        },
        error: () => {
          console.log("qual email?:", localStorage)
          alert('Erro ao carregar os dados do estabelecimento.');
        }
      });
    } else {
      alert('Email do estabelecimento não encontrado.');
    }
  }

  salvarAlteracoes(): void {
    const email = localStorage.getItem('emailEstabelecimento');
    const senha = this.estabelecimento.senha;

    if (!email || !senha) {
      alert('Email ou senha ausente para salvar as alterações.');
      return;
    }

    this.cadastroService.editarEstabelecimento(this.estabelecimento, email, senha).subscribe({
      next: () => alert('Alterações salvas com sucesso.'),
      error: () => alert('Erro ao salvar alterações.')
    });
  }

  ativarEdicao(): void {
    this.modoEdicao = true;
  }

  cancelarEdicao(): void {
    this.modoEdicao = false;
    const email = localStorage.getItem('emailEstabelecimento');
    if (email) {
      this.cadastroService.buscarEstabelecimentoPorEmail(email).subscribe({
        next: (dados) => {
          this.estabelecimento = dados;
        }
      });
    }
  }

  onHoraAberturaChange(dataHora: Date | number | string) {
    if (dataHora instanceof Date) {
      this.estabelecimento.horaAbertura = this.formatarHoraParaLocalTime(dataHora);

    } else {
      const date = new Date(dataHora);
      this.estabelecimento.horaAbertura = this.formatarHoraParaLocalTime(date);
    }
  }

  onFechamentoChange(dataHora: Date | number | string) {
    if (dataHora instanceof Date) {
      this.estabelecimento.horaFechamento = this.formatarHoraParaLocalTime(dataHora);

    } else {
      const date = new Date(dataHora);
      this.estabelecimento.horaFechamento = this.formatarHoraParaLocalTime(date);
    }
  }

  formatarHoraParaLocalTime(date: Date): string {
    return date.toISOString().substring(11, 19);
  }
}
