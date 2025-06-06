import {Component, OnInit} from '@angular/core';
import {Estabelecimento} from "../../models/estabelecimento.model";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  estabelecimento: Estabelecimento = new Estabelecimento();
  mensagemErro: string = '';
  loginAndamento: boolean = false;

  constructor(private mainService: LoginService,
              private router: Router) {
  }

  logar() {
    if (!this.estabelecimento.email || !this.estabelecimento.senha) {
      this.mensagemErro = 'Preencha o email e a senha';
      return;
    }
    this.mainService.logarEstabelecimento(this.estabelecimento).subscribe({
      next: (res) => {
        if (res && res.id) {
          // Armazena localmente se precisar reaproveitar
          localStorage.setItem('estabelecimento', JSON.stringify(res));
          // Redireciona para o dashboard
          this.router.navigate(['/dashboard']);
        } else {
          this.mensagemErro = 'Credenciais inválidas.';
        }
      },
      error: (err) => {
        this.mensagemErro = 'Falha no login. Verifique seus dados.';
        this.mensagemErro = 'Falha no login. Verifique seus dados.';
        console.error('Erro ao autenticar:', err);
      }
    });
  }
}
