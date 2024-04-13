import {Component, OnInit} from '@angular/core';
import {LoanService} from "../loan.service";
import {BookService} from "../book.service";
import {UserService} from "../user.service";

@Component({
  selector: 'app-liste-loan',
  templateUrl: './liste-loan.component.html',
  styleUrls: ['./liste-loan.component.css']
})
export class ListeLoanComponent implements OnInit{
  loans:any;
  user:any;
  book:any;
  constructor(private service:LoanService,
              private serviceBook:BookService,
              private serviceUser:UserService) {
  }
  ngOnInit(): void {
    let rep = this.service.getAllLoan()
    rep.subscribe((data:any)=>this.loans=data)
    this.findBook();
    this.finUser();
  }
  public finUser(){
    let rep=this.serviceUser.getUserById(this.loans.userId)
    rep.subscribe(data=>this.user=data);

  }
  public findBook(){
    let rep = this.serviceBook.getBookById(this.loans.idBook)
    rep.subscribe((data=>this.book=data))
  }




}
