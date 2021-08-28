import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {RegistrationService} from "../registration.service";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  msg = '';

  constructor(private _service: RegistrationService, private _router : Router) { }

  ngOnInit(): void {
  }

  registerUser() {
    this._service.RegisterUserFromRemote(this.user).subscribe(
      data => {
        console.log("responce received")
        this._router.navigate([''])
      },
      error => {
        console.log("exception occured")
        this.msg = "Bad request, please enter a valid emailId and password";

      }
    )
  }
}
