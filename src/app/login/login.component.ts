import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../models/user-login';
import { FormControl, FormGroup } from '@angular/forms';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new UserLogin();

  constructor() { }

  ngOnInit() {
  }

  get currentUser(){
    return JSON.stringify(this.user);
  }

  onSubmit(){
    console.log("Pulsado boton enviar");
  }


}
