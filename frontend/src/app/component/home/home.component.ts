import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  titulo = 'notaFiscalFront';
  menuAberto = false;

  itensMenu = [
    { texto: 'Perfil', caminho: '/home/perfil', icon: 'user' },
    { texto: 'Horário', caminho: '/home/horario', icon: 'calendar' },
    { texto: 'Cardápio', caminho: '/home/cardapio', icon: 'list' },
    { texto: 'Bebidas', caminho: '/home/bebidas', icon: 'coffee' },
    { texto: 'Pedidos', caminho: '/home/pedidos', icon: 'cart' },
    { texto: 'Histórico', caminho: '/home/historico', icon: 'revert' },
    { texto: 'Localização', caminho: '/home/localizacao', icon: 'map' },
    { texto: 'Configurações', caminho: '/home/configuracoes', icon: 'preferences' }
  ];


  opcoesBotaoMenu = {
    icon: 'menu',
    onClick: () => {
      this.menuAberto = !this.menuAberto;
    }
  };

  constructor(public router: Router) {}

  aoClicarItem(item: any) {
    this.router.navigate([item.caminho]);
    this.menuAberto = false;
  }

  aoAlterarOpcaoDoMenu(evento: any) {
    if (evento.name === 'opened') {
      this.menuAberto = evento.value;
    }
  }
}
