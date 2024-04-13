import {Component, OnInit} from '@angular/core';
import {LoanService} from "../loan.service";
import {AuthService} from "../auth.service";
import {UserService} from "../user.service";
import {BookService} from "../book.service";
import {ReservationService} from "../reservation.service";

@Component({
  selector: 'app-list-res-by-user',
  templateUrl: './list-res-by-user.component.html',
  styleUrls: ['./list-res-by-user.component.css']
})
export class ListResByUserComponent implements OnInit{

  ress:any
  user!:any;
  userConnecte:any;
  book:any;
  constructor(private service:ReservationService,
              private auth:AuthService,
              private userService:UserService,
              private serviceBook:BookService) {
  }
  ngOnInit() {
    this.service.resByUser(2).subscribe((data:any) => {this.ress = data
      console.log('Articles by user:', data);
    });
    this.userConnecte = this.auth.getAuthenticatedUser();
    console.log(this.userConnecte);
    console.log(this.userConnecte.sub)

    this.getUserByUserName(this.userConnecte.sub);
    this.findBook();
  }
  public getUserByUserName(username: string) {

    let rep = this.userService.getUserByUserName(username);

    rep.subscribe((data: any) => this.user = data);
    console.log(rep);
  }
  public findBook(){
    let rep = this.serviceBook.getBookById(this.ress.idBook)
    rep.subscribe((data=>this.book=data))
  }

}
