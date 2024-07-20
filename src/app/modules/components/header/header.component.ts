import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  routesList = [
    { path: '', label: 'Inicio' },
    { path: '', label: 'Quem Somos' },
    { path: '', label: 'Protocolo' },
    { path: '', label: 'Servicos' },
    { path: '', label: 'Duvidas Frequentes' },
    // { path: 'pagina2', label: 'Página 2' },
    // { path: 'pagina3', label: 'Página 3' },
    // Adicione mais rotas conforme necessário
  ];
  constructor() {}

  ngOnInit(): void {}
}
