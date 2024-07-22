import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { CarrosselComponent } from '../components/carrossel/carrossel.component';
import { FooterComponent } from '@coreui/angular';
import { MainQuemSomosComponent } from '../components/main-quem-somos/main-quem-somos.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MainDuvidasFrequentesComponent } from '../components/main-duvidas-frequentes/main-duvidas-frequentes.component';
import { TabsProtocoloComponent } from '../components/tabs-protocolo/tabs-protocolo.component';
import { ButtonsProtocoloComponent } from '../components/buttons-protocolo/buttons-protocolo.component';

@NgModule({
  declarations: [HeaderComponent, ButtonsProtocoloComponent],
  imports: [
    CommonModule,
    CarrosselComponent,
    FooterComponent,
    MainQuemSomosComponent,
    AppRoutingModule,
    TabsProtocoloComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MainQuemSomosComponent,
    TabsProtocoloComponent,
    ButtonsProtocoloComponent,
  ],
})
export class CartorioModule {}
