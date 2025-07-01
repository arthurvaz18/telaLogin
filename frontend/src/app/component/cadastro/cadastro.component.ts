import { Component, OnInit } from '@angular/core';
import {Estabelecimento} from "../../models/estabelecimento.model";
import {CadastroService} from "../../services/cadastro.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  estabelecimento: Estabelecimento = new Estabelecimento();

  constructor(private mainService: CadastroService,
              private router: Router) {}

  ngOnInit(): void {
  }

  cadastrarEstabelecimento() {
    this.mainService.cadastrarEstabelecimento(this.estabelecimento).subscribe({
      next: () =>{
        this.estabelecimento = new Estabelecimento();
        alert('Cadastro Realizado com Sucesso')
        this.router.navigate(['/login'])
      },
      error: (erro) =>{
        console.error('Erro ao cadastrar:', erro);
        alert('Erro ao cadastrar estabelecimento, tente novamente.');
      }
    })
  }

  jaPossuiCadastro() {
    this.router.navigate(['/login'])
  }
}
