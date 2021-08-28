import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs";
import {Film} from "./film";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }
  public loginUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",user)
  }
  public RegisterUserFromRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/registeruser",user)
  }
  public ajouterFilmFromRemote(film :Film):Observable<any>{
    return this._http.post<any>("http://localhost:8080/ajouterfilm",film)
  }
}
