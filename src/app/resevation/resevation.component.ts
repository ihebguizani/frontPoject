import {Component, OnInit} from '@angular/core';
import {ReservationService} from "../reservation.service";
import {UserService} from "../user.service";
import {AuthService} from "../auth.service";
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-resevation',
  templateUrl: './resevation.component.html',
  styleUrls: ['./resevation.component.css']
})
export class ResevationComponent implements OnInit{
  user:any;
  userConnecte:any;
  book:any;
  resForm!  :FormGroup

  constructor(private service:ReservationService,
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
    this.resForm = this.formBuilder.group({
      resDate:[this.getCurrentDate()],
    });
  }
  getCurrentDate(): string {
    return this.datePipe.transform(new Date(), 'yyyy-MM-dd') || '';
  }

  public reserver() {
    const reservation ={
      resDate:this.datePipe.transform(this.resForm.controls['resDate'].value, 'yyyy-MM-dd'),
      userId:this.user.userId,
      idBook:this.book.idBook
    }
    this.service.aadRes(reservation).subscribe((data:any)=>
    {console.log('data',data);})
    this.route.navigateByUrl('liste');
  }
}
