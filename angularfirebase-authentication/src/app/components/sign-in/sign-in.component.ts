import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";
import { auth } from 'firebase';
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  username:string = ""
  password:string = ""

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() { }

  tryLogin(){
    this.authService.SignIn(this.username, this.password);
  }

}