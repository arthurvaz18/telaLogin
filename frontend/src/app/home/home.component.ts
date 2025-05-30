import {Component, Injector, OnInit} from '@angular/core';
import { HomeService} from "./home.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nomePortal = "http://loiane.training"

  cursos: string[] = [];

  constructor(private mainService: HomeService,
              private injector: Injector) {
  }

  ngOnInit(): void {
    this.ObtendoCursos()
  }
  ObtendoCursos(){
    this.cursos = this.mainService.getCursos()
  }
}
