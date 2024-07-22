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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TabsProtocoloComponent } from './modules/components/tabs-protocolo/tabs-protocolo.component';
import { ProtocoloComponent } from './modules/pages/protocolo/protocolo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuemSomosComponent,
    DuvidasFrequentesComponent,
    MainDuvidasFrequentesComponent,
    ProtocoloComponent,
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
    TabsProtocoloComponent,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
