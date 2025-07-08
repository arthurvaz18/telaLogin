import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estabelecimento } from '../../models/estabelecimento.model';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  estabelecimento: Estabelecimento = new Estabelecimento();

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  login(): void {
    const request = {
      email: this.estabelecimento.email,
      senha: this.estabelecimento.senha
    };

    this.authService.login(request).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/home']);
      },
      error: () => {
        alert('Email ou senha inválidos!');
      }
    });
  }

  CriarCadastro(): void {
    this.router.navigate(['/cadastro']);
  }
}
