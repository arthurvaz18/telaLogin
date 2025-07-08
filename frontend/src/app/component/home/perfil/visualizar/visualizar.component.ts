import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from "../../../../models/estabelecimento.model";
import { CadastroService } from "../../../../services/cadastro.service";
import { TipoEstabelecimentoEnum } from "../../../../models/enums/tipo-estabelecimento.enum";
import { DiaSemanaEnum } from "../../../../models/enums/dia-semana-enum";
import { EstabelecimentoService } from "../../../../services/estabelecimento.service";
import { AuthService } from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {

  estabelecimento: Estabelecimento = new Estabelecimento();
  tipoEstabelecimentoEnum = Object.values(TipoEstabelecimentoEnum);
  diaSemanaEnum = Object.values(DiaSemanaEnum);

  alterarCampo = false;
  modoEdicao = false;

  constructor(
    private cadastroService: CadastroService,
    private estabelecimentoService: EstabelecimentoService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.buscarDadosEstabelecimento()
  }

  buscarDadosEstabelecimento(): void{
    const email = this.authService.getUserEmail();
    if (email) {
      this.estabelecimentoService.buscarEstabelecimentoPorEmail(email).subscribe({
        next: (dados) => {
          this.estabelecimento = dados;
        },
        error: () => {
          console.error("Erro ao carregar os dados do estabelecimento.");
          alert('Erro ao carregar os dados do estabelecimento.');
        }
      });
    } else {
      alert('Email do estabelecimento não encontrado no token.');
    }
  }

  ativarEdicao(): void {
    this.modoEdicao = true;
  }

  cancelarEdicao(): void {
    this.modoEdicao = false;
    const email = this.authService.getUserEmail();
    if (email) {
      this.estabelecimentoService.buscarEstabelecimentoPorEmail(email).subscribe({
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
