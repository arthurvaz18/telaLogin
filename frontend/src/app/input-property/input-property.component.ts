import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.scss']
})
export class InputPropertyComponent implements OnInit {

  valor: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  adicao() {
    this.valor ++;
  }
  diminuir(){
    this.valor --;
  }
}
