import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  constructor(private http:HttpClient) { }

  public addLoan(loan:any){
    return this.http.post("http://localhost:8000/addLoan",loan);
  }
  public getAllLoan(){
    return this.http.get("http://localhost:8000/allLoan");
  }
  public loanByUser(userId:number){
    return this.http.get("http://localhost:8000/loanByUser/"+userId)
  }
}
