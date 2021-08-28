import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectionService {
  public host:string="http://localhost:8080"

  constructor(private httpClient: HttpClient) {
  }

  getProjectionList(){
    return this.httpClient.get(this.host+'/projectionss/');
  }

}
