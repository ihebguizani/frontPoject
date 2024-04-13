import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {BookService} from "../book.service";
import {PopUpDeleteBookComponent} from "../pop-up-delete-book/pop-up-delete-book.component";
import {MatDialog} from "@angular/material/dialog";
import {PopUpAjouterBookComponent} from "../pop-up-ajouter-book/pop-up-ajouter-book.component";
import {PopUpUpdateComponent} from "../pop-up-update/pop-up-update.component";

@Component({
  selector: 'app-list-book-admin',
  templateUrl: './list-book-admin.component.html',
  styleUrls: ['./list-book-admin.component.css']
})
export class ListBookAdminComponent implements OnInit{
  books:any;
  constructor(private service: BookService,
              public router:Router,
              private dialog:MatDialog
  ) {}
  public getarticlById(idBook: number) {
    let resp = this.service.getBookById(idBook);
    resp.subscribe((data: any) => this.books = data);
  }

  ngOnInit() {
    let resp = this.service.getBook()
    resp.subscribe((data: any) => this.books = data);
  }






  openDelateBook(idBook:number){
    this.dialog.open(PopUpDeleteBookComponent,{width:'40%',
      enterAnimationDuration:'100ms',
      exitAnimationDuration:'100ms',
      data:{
        title:'Supprimer Book',
        idBook:idBook
      }})
  }

 /* openupdate() {
    this.dialog.open(PopUpUpdateArticleComponent,{
      width:'20%',
      enterAnimationDuration:'500ms',
      exitAnimationDuration:'100ms',
      data:{
        title:'mise a jour de article?'
      }
    })
  }*/

  openup() {
      this.dialog.open(PopUpAjouterBookComponent, {
        width: '40%',
        enterAnimationDuration: '100ms',
        exitAnimationDuration: '100ms',
        data: {
          title: 'Ajouter Book'
        }
      })
    }

    openUpdateBook(idBook: any) {
      this.dialog.open(PopUpUpdateComponent,{width:'40%',
        enterAnimationDuration:'100ms',
        exitAnimationDuration:'100ms',
        data:{
          title:'Mise à jour Book',
          idBook:idBook
        }})

    }
}
