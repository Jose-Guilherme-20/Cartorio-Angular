import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { QuemSomosComponent } from './modules/pages/quem-somos/quem-somos.component';
import { DuvidasFrequentesComponent } from './modules/pages/duvidas-frequentes/duvidas-frequentes.component';
import { ProtocoloComponent } from './modules/pages/protocolo/protocolo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'quemSomos',
    component: QuemSomosComponent,
  },
  {
    path: 'duvidasFrequentes',
    component: DuvidasFrequentesComponent,
  },
  {
    path: 'protocolo',
    component: ProtocoloComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
