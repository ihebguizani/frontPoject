import {Component, OnInit} from '@angular/core';
import {BookService} from "../book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit{
 books:any;
  constructor(private service:BookService,
              public route:Router) {
  }
  ngOnInit(): void {
    let resp = this.service.getBook()
    resp.subscribe((data:any) => this.books=data)
  }

  opendetaille(idBook:number) {
    this.route.navigate(['/detaile',idBook]);
  }

  openloan(idBook: any) {
    this.route.navigate(['/loan',idBook])
  }
}
