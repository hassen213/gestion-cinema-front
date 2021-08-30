import { Component, OnInit } from '@angular/core';
import {Film} from "../film";
import {RegistrationService} from "../registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ajouter-film',
  templateUrl: './ajouter-film.component.html',
  styleUrls: ['./ajouter-film.component.css']
})
export class AjouterFilmComponent implements OnInit {
  film = new Film();

  constructor(private _service: RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  ajouterFilm() {
    this._service.ajouterFilmFromRemote(this.film).subscribe(
      data => {
        console.log(data)
        this.goToCinema();
        },
      error => {
        console.log("exception occured")

      }
    )
  }

  goToCinema(){
    this._router.navigate(['/cinema'])
  }

  onSubmit(){
    console.log(this.film);
    this.ajouterFilm();
  }


}
