import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {LoanService} from "../loan.service";
import {AuthService} from "../auth.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-list-loan-by-user',
  templateUrl: './list-loan-by-user.component.html',
  styleUrls: ['./list-loan-by-user.component.css']
})
export class ListLoanByUserComponent implements OnInit{
  loans:any
  user!:any;
  userConnecte:any;
  book:any;
  constructor(private service:LoanService,
              private auth:AuthService,
              private userService:UserService,
              private serviceBook:BookService) {
  }
  ngOnInit() {
    this.service.loanByUser(2).subscribe((data:any) => {this.loans = data
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
    let rep = this.serviceBook.getBookById(this.loans.idBook)
    rep.subscribe((data=>this.book=data))
  }

}
