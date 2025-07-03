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
    {
      texto: 'Perfil',
      icon: 'user',
      expanded: false,
      subItens: [
        { texto: 'Visualizar', caminho: '/home/perfil/visualizar' },
        { texto: 'Editar', caminho: '/home/perfil/editar' }
      ]
    },
    {
      texto: 'Estabelecimento',
      icon: 'home',
      expanded: false,
      subItens: [
        {texto: 'Informações', caminho: '/home/estabelecimento/info-estabelecimento'},
      ]
    },
    { texto: 'Cardápio', caminho: '/home/cardapio', icon: 'doc' },
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

  toggleExpand(item: any) {
    item.expanded = !item.expanded;
  }

  aoClicarItem(item: any, event?: MouseEvent): void {
    if (event) event.stopPropagation();
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
