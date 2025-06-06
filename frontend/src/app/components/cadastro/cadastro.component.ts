import { Component, OnInit } from '@angular/core';
import {Estabelecimento} from "../../models/estabelecimento.model";
import {CadastroService} from "../../services/cadastro.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  estabelecimento: Estabelecimento = new Estabelecimento();
  cadastroAndamento: boolean = false;

  constructor(private mainService: CadastroService,
              private router: Router) {}

  cadastrar(){
    if (this.cadastroAndamento) return;  // evita envio duplicado
    this.cadastroAndamento = true;

    this.mainService.cadastrarEstabelecimento(this.estabelecimento).subscribe({
      next:(res) => {
        alert('Cadastro realizado com sucesso!');
        this.estabelecimento = new Estabelecimento(); // limpa formulário
        this.cadastroAndamento = false;
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro ao cadastrar:', err);
        alert('Erro ao cadastrar estabelecimento. Tente novamente.');
        this.cadastroAndamento = false;
      }
    })
  }

}
