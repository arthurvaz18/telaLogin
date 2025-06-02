import {Component, EventEmitter, Injector, OnInit, Output} from '@angular/core';
import {HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() temperaturaMudou = new EventEmitter<number>();

  arCondicionado: number = 0;

  aumentarTemperatura(){
    this.arCondicionado ++;
  }

  diminuirTemperatura(){
    this.arCondicionado --;
  }

  constructor(private mainService: HomeService,
              private injector: Injector) {
  }

  ngOnInit(): void {
  }
}
