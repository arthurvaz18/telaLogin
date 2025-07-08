import {Component, OnInit} from '@angular/core';
import {Estabelecimento} from "../../../../models/estabelecimento.model";
import {CadastroService} from "../../../../services/cadastro.service";
import {TipoEstabelecimentoEnum} from "../../../../models/enums/tipo-estabelecimento.enum";
import {DiaSemanaEnum} from "../../../../models/enums/dia-semana-enum";
import {EstabelecimentoService} from "../../../../services/estabelecimento.service";
import {AuthService} from "../../../../services/auth/auth.service";

@Component({
  selector: 'app-info-estabelecimento',
  templateUrl: './info-estabelecimento.component.html',
  styleUrls: ['./info-estabelecimento.component.scss']
})
export class InfoEstabelecimentoComponent implements OnInit {
  estabelecimento: Estabelecimento = new Estabelecimento();
  tipoEstabelecimentoEnum = Object.values(TipoEstabelecimentoEnum);
  diaSemanaEnum = Object.values(DiaSemanaEnum);


  constructor(private cadastroService: CadastroService,
              private estabelecimentoService: EstabelecimentoService,
              private authService: AuthService) {
  }

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

}
