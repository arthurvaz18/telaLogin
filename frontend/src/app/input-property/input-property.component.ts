import {Component, OnInit, ViewChild} from '@angular/core';
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {

  @ViewChild("arCondicionado") ar : HomeComponent;

  temperaturaAtual: number = 19;

  subirAR(){
    this.ar.aumentarTemperatura()
  }

  diminuirAR(){
    this.ar.diminuirTemperatura()
  }

  onTemperaturaMudou(novaTemperatura: number){
    this.temperaturaAtual = novaTemperatura;
  }

  constructor() { }

  ngOnInit(): void {
  }
}
