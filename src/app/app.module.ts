import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartorioModule } from './modules/cartorio/cartorio.module';
import { HomeComponent } from './modules/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule } from '@coreui/angular';
import { CarrosselComponent } from './modules/components/carrossel/carrossel.component';
import { MainHomeComponent } from './modules/components/main-home/main-home.component';
import { FooterComponent } from './modules/components/footer/footer.component';
import { QuemSomosComponent } from './modules/pages/quem-somos/quem-somos.component';
import { MainDuvidasFrequentesComponent } from './modules/components/main-duvidas-frequentes/main-duvidas-frequentes.component';
import { DuvidasFrequentesComponent } from './modules/pages/duvidas-frequentes/duvidas-frequentes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuemSomosComponent,
    DuvidasFrequentesComponent,
    MainDuvidasFrequentesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartorioModule,
    BrowserAnimationsModule,
    AlertModule,
    CarrosselComponent,
    MainHomeComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
