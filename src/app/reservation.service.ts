import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http:HttpClient) { }
  public aadRes(reservation:any){
    return this.http.post("http://localhost:8000/addRes",reservation);

  }
  public getAllRes(){
    return this.http.get("http://localhost:8000/resrv");
  }
  public resByUser(userId:number){
    return this.http.get("http://localhost:8000/resByUser/"+userId)
  }
}
