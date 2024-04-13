import {Component, OnInit} from '@angular/core';
import {LoanService} from "../loan.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserService} from "../user.service";
import {AuthService} from "../auth.service";
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit{

  user:any;
  userConnecte:any;
  book:any;
  loanForm!  :FormGroup

  constructor(private service:LoanService,
              private userService:UserService,
              private auth:AuthService,
              private bookSer:BookService,
              private router:ActivatedRoute,
              private route:Router,
              private formBuilder: FormBuilder,
              private datePipe:DatePipe) {
  }

  ngOnInit(): void {
    this.iniateForm();
    this.userConnecte = this.auth.getAuthenticatedUser();
    this.getUserByUserName(this.userConnecte.sub);

    this.router.params.subscribe(params => {
      const id = params['idBook'];
      this.bookSer.getBookById(id).subscribe(book =>{
        this.book = book;
      });
    });
  }
  public getUserByUserName(username: string) {

    let rep = this.userService.getUserByUserName(username);

    rep.subscribe((data: any) => this.user = data);
    console.log(rep);
  }
  iniateForm() {
    this.loanForm = this.formBuilder.group({
      endDate:[this.getCurrentDate()],
    });
  }
  getCurrentDate(): string {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  }

  public loan() {
    const loan ={
      endDate: this.datePipe.transform(this.loanForm.controls['endDate'].value, 'yyyy-MM-dd'),
      userId:this.user.userId,
      idBook:this.book.idBook
    }
    console.log(loan.endDate)
    console.log(loan);
    this.service.addLoan(loan).subscribe((data:any)=>
    {console.log('data',data);})
    this.route.navigateByUrl('liste');
  }
}
