import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BookService} from "../book.service";

@Component({
  selector: 'app-pop-up-delete-book',
  templateUrl: './pop-up-delete-book.component.html',
  styleUrls: ['./pop-up-delete-book.component.css']
})
export class PopUpDeleteBookComponent implements OnInit{
  books?:any;
  inputdata:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private service:BookService, private ref:MatDialogRef<PopUpDeleteBookComponent>) {
  }

  public deleteBook(idBook:number) {
    let resp = this.service.deleteBook(idBook);
    resp.subscribe((data: any) => this.books = data);
    console.log(resp)
  }

  closepop() {
    this.ref.close();
  }
  ngOnInit(): void {
    this.inputdata=this.data;
  }

}
