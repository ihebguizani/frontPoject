import {Component, Inject, OnInit} from '@angular/core';
import {CategorieService} from "../categorie.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-pop-up-supp-cat',
  templateUrl: './pop-up-supp-cat.component.html',
  styleUrls: ['./pop-up-supp-cat.component.css']
})
export class PopUpSuppCatComponent implements OnInit{
  categories:any;
  inputdata:any;


  constructor(private service:CategorieService,
              private ref:MatDialogRef<PopUpSuppCatComponent>,
              @Inject(MAT_DIALOG_DATA) public data:any,) {
  }
  public deleteCAt(idCategorie:number) {
    let resp = this.service.supprimerCategorie(idCategorie);
    resp.subscribe((data: any) => this.categories = data);
    console.log(resp)
  }

  closepop() {
    this.ref.close();
  }

  ngOnInit(): void {
    this.inputdata=this.data;

  }

}
