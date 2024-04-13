import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }
  public getBook(){
    return this.http.get("http://localhost:5000/room/list");
  }
  public getBookById(roomId:number){
    return this.http.get("http://localhost:5000/rooom/get/"+ roomId);
  }
  public deleteBook(roomId:number){
    return this.http.delete("http://localhost:5000/room/delete/"+roomId);
  }
  public creatBook(book:any){
    return this.http.post("http://localhost:5000/room",book);
  }
  public updateBook(roomId:number,book:any){
    return this.http.put("http://localhost:5000/room/update/"+roomId,book)
  }
}
