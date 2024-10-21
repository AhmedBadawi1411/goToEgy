import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';
import 'firebase/compat/auth';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AuthService {
  private isLoggedIn = false;
  private usersUrl = 'https://retoolapi.dev/sIVpb5/data';

  constructor(private http:HttpClient) {}

  signUp(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.usersUrl, data, { headers });
  }
  
  loginWithEmail(email:string):Observable<any>{
    return this.http.get(this.usersUrl+`?email=${email}`)
  }

  setIsLoggedIn(isLoggedIn:boolean){
    this.isLoggedIn = isLoggedIn;
  }

  getIsLoggedIn():boolean{
    return this.isLoggedIn
  }

  
}
