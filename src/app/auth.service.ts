import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Auth} from "./auth";
import {HttpClient} from "@angular/common/http";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(private http:HttpClient) { }
  login(authen:Auth): Observable<any>{
    return this.http.post('http://localhost:5000/auth/login',authen)
  }
  logout() {
    this.isLoggedIn = false;
  }
  getAuthenticatedUser(): any {
    const token = sessionStorage.getItem('token');

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      console.log(decodedToken)
      return decodedToken;
    } else {
      return null;
    }
  }
}
