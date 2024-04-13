import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategorieService} from "../categorie.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {BookService} from "../book.service";

@Component({
  selector: 'app-pop-up-ajouter-book',
  templateUrl: './pop-up-ajouter-book.component.html',
  styleUrls: ['./pop-up-ajouter-book.component.css']
})
export class PopUpAjouterBookComponent implements OnInit{
  inputdata: any;
  categories?: any;
  nomArticle!: String;
  bookForm!: FormGroup;
  constructor(
      @Inject(MAT_DIALOG_DATA) public data: any,
      private serviceCat: CategorieService,
      private service: BookService,
      private ref: MatDialogRef<PopUpAjouterBookComponent>,
      private formBuilder: FormBuilder,
      private router: Router,
      private http:HttpClient) {
  }
  ngOnInit(): void {
    this.getCategories();
    this.inputdata = this.data;
    this.iniateForm();
  }

  iniateForm() {
    this.bookForm = this.formBuilder.group({
      title: [''],
      author: [''],
      categorie: [''],
    });
  }

  getCategories() {
    let resp = this.serviceCat.getCategories();
    resp.subscribe((data: any) => this.categories = data);
  }

  onSubmit() {
    const formData = this.bookForm.value;

    const book = {
      title: formData.title,
      author: formData.author,
      idCategorie: this.bookForm.controls['categorie'].value,
    };
    console.log(book);

    this.service.creatBook(book).subscribe(response => {
      console.log('Article créé avec succès', response);
      this.bookForm.reset();
    });
  }

  closepop() {

    this.ref.close();
  }
}
