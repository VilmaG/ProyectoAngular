import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { DatosComponent } from './components/datos/datos.component';
import { RigthComponent } from './components/rigth/rigth.component';
import { PostComponent } from './components/post/post.component';
import { PaisComponent } from './components/pais/pais.component';
import { PeruComponent } from './components/peru/peru.component';
import { ApiRestService } from './services/api-rest.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MiProyectoComponent } from './components/mi-proyecto/mi-proyecto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    DatosComponent,
    RigthComponent,
    PostComponent,
    PaisComponent,
    PeruComponent,
    MiProyectoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [ApiRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
