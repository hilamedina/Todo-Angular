import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {User} from "../User"


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._loginUrl);
  }
 
    
    // loginUser(user : any):Observable<any>{
    //   console.log(user)
    //   return this.http.post<any>(this._loginUrl ,user)
    // }
   
}
