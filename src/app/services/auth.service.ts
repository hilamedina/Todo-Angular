import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loginUrl = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }
    // loginUser(user : any){
    //   return this.http.post<any>(this._loginUrl ,user)
    // } 
    loginUser(user : any):Observable<any>{
      return this.http.post<any>(this._loginUrl ,user)
    }
   
}
