import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../reservation.service";
import {UserService} from "../user.service";
import {BookService} from "../book.service";

@Component({
  selector: 'app-liste-reservation',
  templateUrl: './liste-reservation.component.html',
  styleUrls: ['./liste-reservation.component.css']
})
export class ListeReservationComponent implements OnInit{
  ress:any;
  user:any;
  book:any;
  constructor(private service:ReservationService,
              private serviceUser:UserService,
              private serviceBook:BookService) {
  }
  ngOnInit(): void {
    let rep =this.service.getAllRes()
    rep.subscribe((data:any)=> this.ress=data)
    this.findBook()
    this.finUser()

  }
  public finUser(){
    let rep=this.serviceUser.getUserById(this.ress.userId)
    rep.subscribe(data=>this.user=data);

  }
  public findBook(){
    let rep = this.serviceBook.getBookById(this.ress.idBook)
    rep.subscribe((data=>this.book=data))
  }

}
