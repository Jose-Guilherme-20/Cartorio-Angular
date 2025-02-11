import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { CarrosselComponent } from '../components/carrossel/carrossel.component';
import { FooterComponent } from '@coreui/angular';
import { MainQuemSomosComponent } from '../components/main-quem-somos/main-quem-somos.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MainDuvidasFrequentesComponent } from '../components/main-duvidas-frequentes/main-duvidas-frequentes.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    CarrosselComponent,
    FooterComponent,
    MainQuemSomosComponent,
    AppRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainQuemSomosComponent,
    FooterComponent,
  ],
})
export class CartorioModule {}
