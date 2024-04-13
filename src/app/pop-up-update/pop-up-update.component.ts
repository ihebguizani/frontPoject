import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {BookService} from "../book.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {ListBookAdminComponent} from "../list-book-admin/list-book-admin.component";

@Component({
  selector: 'app-pop-up-update',
  templateUrl: './pop-up-update.component.html',
  styleUrls: ['./pop-up-update.component.css']
})
export class PopUpUpdateComponent implements OnInit{
  book?:any;
  books?:any;
  title!:string;
  author!:number;
  bookForm!: FormGroup;
  inputdata: any;
  constructor( @Inject(MAT_DIALOG_DATA) public data:any,
               private service:BookService,
               private ref:MatDialogRef<ListBookAdminComponent>,
               private formBuilder: FormBuilder,
               private router:ActivatedRoute) {
  }
  closepop() {
    this.ref.close();
  }
  ngOnInit(): void {
    this.iniateForm();
    this.inputdata = this.data;
    const id = this.data.idBook;
    this.service.getBookById(id).subscribe(book =>{
      this.books =book;
      console.log(this.books);
    });



  }
  iniateForm() {
    this.bookForm = this.formBuilder.group({
      Title: [''],
      Author: [''],
    })
  }
  public updateNow(idBook:any){
    console.log(this.books)

    const book={

      title:this.bookForm.controls['title'].value,
      author:this.bookForm.controls['author'].value,

    }
    if(book.title===""){
      book.title=this.books.title;
    }if(book.author===""){
      book.author=this.books.author;
    }
    console.log(book)
    this.service.updateBook(idBook,book).subscribe((data:any)=>{
      console.log('data :',data);
    })
  }
}
