import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  menuAberto = false;

  rotaAtual: string;

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
    stylingMode: 'text',
    type: 'normal',
    hint: 'Abrir menu',
    elementAttr: {
      class: 'botao-menu-modern'
    },
    onClick: () => this.alternarMenu()
  };

  constructor(private router: Router) {
    this.rotaAtual = router.url;
  }

  alternarMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  aoClicarItem(item: any): void {
    this.router.navigate([item.caminho]);
    this.rotaAtual = item.caminho;
    this.menuAberto = false;
  }

  aoAlterarOpcaoDoMenu(evento: any): void {
    if (evento.name === 'opened') {
      this.menuAberto = evento.value;
    }
  }
}
