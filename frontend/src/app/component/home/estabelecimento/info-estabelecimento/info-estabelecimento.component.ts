import {Component, OnInit} from '@angular/core';
import {Estabelecimento} from "../../../../models/estabelecimento.model";
import {CadastroService} from "../../../../services/cadastro.service";
import {TipoEstabelecimentoEnum} from "../../../../models/enums/tipo-estabelecimento.enum";
import {DiaSemanaEnum} from "../../../../models/enums/dia-semana-enum";

@Component({
  selector: 'app-info-estabelecimento',
  templateUrl: './info-estabelecimento.component.html',
  styleUrls: ['./info-estabelecimento.component.scss']
})
export class InfoEstabelecimentoComponent implements OnInit {
  estabelecimento: Estabelecimento = new Estabelecimento();
  tipoEstabelecimentoEnum = Object.values(TipoEstabelecimentoEnum);
  diaSemanaEnum = Object.values(DiaSemanaEnum);


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

}
