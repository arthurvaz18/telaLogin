import {Component, Injector, OnInit} from '@angular/core';
import { HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url: string = "http/loaine.com"

  contador = 0;

  cursoAngular: boolean = true

  urlImagem = 'https://picsum.photos/200/300';

  getCursoAngular(){
    return true;
  }
  getValor(){
    return 1;
  }
  incrementaValor(){
    this.contador ++;
  }
  constructor(private mainService: HomeService,
              private injector: Injector) {
  }

  ngOnInit(): void {
  }
}
