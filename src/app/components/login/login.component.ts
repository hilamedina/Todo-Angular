import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!:String
  email!: String 

  // text! :String;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }
  loginUser(){
   console.log( this.authService.loginUser(this.email))

    // console.log(this.email)
    // console.log(this.password)


  }

}
