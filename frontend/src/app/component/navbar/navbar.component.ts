import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{

  menuItems = [
    { text: 'Início', path: '/inicio' },
    { text: 'Login', path: '/login' },
    { text: 'Cadastro', path: '/cadastro' }
  ];

  constructor(private router: Router) {}

  navegandoPara(path: string) {
    this.router.navigate([path]);
  }

}
