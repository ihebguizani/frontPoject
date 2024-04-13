import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategorieComponent} from "../categorie/categorie.component";
import {CategorieService} from "../categorie.service";

@Component({
  selector: 'app-pop-up-ajouter-cat',
  templateUrl: './pop-up-ajouter-cat.component.html',
  styleUrls: ['./pop-up-ajouter-cat.component.css']
})
export class PopUpAjouterCatComponent implements OnInit{
  categForm!: FormGroup;
  inputdata: any;

  constructor(private formBuilder: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private serviceCat: CategorieService,
              private ref: MatDialogRef<CategorieComponent>,) {
  }
  ngOnInit(): void {
    this.iniateForm();
    this.inputdata=this.data;
  }
  iniateForm() {
    this.categForm = this.formBuilder.group({
      nomCategorie: [''],
    })
  }
  public ajouCat(){
    const categorie={
      nomCategorie:this.categForm.controls['nomCategorie'].value
    }
    this.serviceCat.creatCategorie(categorie).subscribe((data:any)=>{
      console.log('data:',data);
    })
  }

  closepop() {
    this.ref.close();
  }
}
