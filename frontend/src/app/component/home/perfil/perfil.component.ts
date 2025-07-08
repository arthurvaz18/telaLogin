import { Component, OnInit } from '@angular/core';
import { CadastroService } from '../../../services/cadastro.service';
import { Estabelecimento } from '../../../models/estabelecimento.model';
import {EstabelecimentoService} from "../../../services/estabelecimento.service";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  estabelecimento: Estabelecimento = new Estabelecimento();

  constructor(private cadastroService: CadastroService,
              private estabelecimentoService: EstabelecimentoService) {}

  ngOnInit(): void {
    const email = localStorage.getItem('emailEstabelecimento');
    if (email) {
      this.estabelecimentoService.buscarEstabelecimentoPorEmail(email).subscribe({
        next: (dados) => {
          this.estabelecimento = dados;
        },
        error: () => {
          console.log("qual email?:" ,localStorage)
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

    this.estabelecimentoService.editarEstabelecimento(this.estabelecimento, email, senha).subscribe({
      next: () => alert('Alterações salvas com sucesso.'),
      error: () => alert('Erro ao salvar alterações.')
    });
  }
}
