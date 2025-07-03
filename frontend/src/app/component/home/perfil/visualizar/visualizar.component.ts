import { Component, OnInit } from '@angular/core';
import {Estabelecimento} from "../../../../models/estabelecimento.model";
import {CadastroService} from "../../../../services/cadastro.service";

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.component.html',
  styleUrls: ['./visualizar.component.scss']
})
export class VisualizarComponent implements OnInit {

  estabelecimento: Estabelecimento = new Estabelecimento();
  alterarCampo = false;

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
}
