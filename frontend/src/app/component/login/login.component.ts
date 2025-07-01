import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";
import {Estabelecimento} from "../../models/estabelecimento.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  estabelecimento: Estabelecimento = new Estabelecimento();

  constructor(private mainService: LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    if(this.estabelecimento.email && this.estabelecimento.senha){
      this.mainService.logarEstabelecimento(this.estabelecimento).subscribe({
        next: (logar) =>{
        alert('Login realizado com Sucesso');
        this.router.navigate(['/home']);
        },
        error:(erro) =>{
          console.error('Erro ao Logar', erro);
          alert('Email ou senha inválidos. Tente novamente.');
      }
      });
    }else {
      alert('Preencha email e senha');
    }
  }

  CriarCadastro() {
    this.router.navigate(['/cadastro'])
  }
}
