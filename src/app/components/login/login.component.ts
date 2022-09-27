import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import {User} from "../../User"
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
users: User[] = [];
username! :String
email!: String 

  constructor(private authService: AuthService,private router: Router) { 
  }
  

  ngOnInit(): void {}

  getUsers(){
  this.authService.getUsers().subscribe((users) => {this.users = users
     const _username = this.username;
     const _email= this.email;
      const user = this.users.filter(({username, email}) =>{
        return(username === _username && email === _email)
      })
      if(user[0]){
        console.log(user[0]);
        this.router.navigate(['/'])
     }
     else {
      alert("please add new username and email")
       return;
     }
    });
  }


  // login(users: User[]): void
  // {
  //  const _username = this.username;
  //  const _email= this.email;
  //  console.log(_username)
  //  console.log(_email)
  //  console.log("users",users)
  //   const user = this.users.filter(({username, email}) =>{
  //     console.log("username",username)
  //     return (username === _username && email === _email) })
  //     console.log(user)
  //   if(user){
  //     console.log( user);
  // }
  // else {
  //   console.log("no");
  // }
  //  console.log("user is"+ _username , "email is"+ _email);
  // }
  
  // loginUser(){
  // console.log(this.authService.loginUser(this.email))
  // console.log(this.email)
  // console.log(this.username)
  // }

}
