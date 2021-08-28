import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CinemaComponent} from "./cinema/cinema.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AjouterFilmComponent} from "./ajouter-film/ajouter-film.component";
import {ListProjectionComponent} from "./list-projection/list-projection.component";

const routes: Routes = [
  {path :"", component : LoginComponent},
  {path :"cinema", component : CinemaComponent},
  {path : "register", component : RegisterComponent},
  {path : "ajouterfilm", component: AjouterFilmComponent},
  {path : "listprojections", component: ListProjectionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
