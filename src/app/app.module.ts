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

@NgModule({
  declarations: [AppComponent, HomeComponent],
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
