import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../categorie.service";
import {MatDialog} from "@angular/material/dialog";
import {PopUpAjouterCatComponent} from "../pop-up-ajouter-cat/pop-up-ajouter-cat.component";
import {PopUpSuppCatComponent} from "../pop-up-supp-cat/pop-up-supp-cat.component";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit{
  categories:any;

  constructor(private service:CategorieService,
      private dialog:MatDialog) {
  }
  ngOnInit(): void {
    let resp = this.service.getCategories()
    resp.subscribe((data: any) => this.categories = data);
  }

  opnpop(idCategorie:number){
    this.dialog.open(PopUpSuppCatComponent,{width:'40%',
      enterAnimationDuration:'100ms',
      exitAnimationDuration:'100ms',
      data:{
        title:'Supprimer Article',
        idCategorie:idCategorie
      }})
  }

  ajoutCat() {
    this.dialog.open(PopUpAjouterCatComponent,{width:'50%',
      enterAnimationDuration:'100ms',
      exitAnimationDuration:'100ms',
      data:{
        title:'Ajouter Categorie'
      }})

  }

}
