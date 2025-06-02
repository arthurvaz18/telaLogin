import {Component, Injector, OnInit} from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  valorAtual: string;

  botaoClicado() {
    alert("Botão clicado!")
  }


  constructor(private mainService: HomeService,
              private injector: Injector) {
  }

  ngOnInit(): void {
  }

  textoDigitado($event: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>$event.target).value);
  }
}
