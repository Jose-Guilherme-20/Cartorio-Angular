import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { CarrosselComponent } from '../components/carrossel/carrossel.component';
import { MainHomeComponent } from '../components/main-home/main-home.component';
import { FooterComponent } from '@coreui/angular';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, CarrosselComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent],
})
export class CartorioModule {}
