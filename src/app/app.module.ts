 import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CinemaComponent } from './cinema/cinema.component';
 import {HttpClientModule} from "@angular/common/http";
 import {FormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AjouterFilmComponent } from './ajouter-film/ajouter-film.component';
import { ListProjectionComponent } from './list-projection/list-projection.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaComponent,
    LoginComponent,
    RegisterComponent,
    AjouterFilmComponent,
    ListProjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
