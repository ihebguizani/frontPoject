import { Injectable } from '@angular/core';
import {User} from "./user";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(`http://localhost:5000/list`);
  }

  getUserByUserName(username: string) {
    return this.http.get('http://localhost:8000/api/user/getByUsername/' + username);
  }
  register(user:User):Observable<any>{
    return this.http.post('http://localhost:5000/auth/register',user);
  }
  getUserById(userId:number){
    return this.http.get('http://localhost:5000/get/'+userId)
  }
}
