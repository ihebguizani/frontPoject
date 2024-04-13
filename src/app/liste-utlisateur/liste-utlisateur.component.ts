import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";

@Component({
  selector: 'app-liste-utlisateur',
  templateUrl: './liste-utlisateur.component.html',
  styleUrls: ['./liste-utlisateur.component.css']
})
export class ListeUtlisateurComponent implements OnInit{
  users:any
  constructor(private userService:UserService) {
  }
  ngOnInit(): void {

    let resp = this.userService.getAll()
    resp.subscribe((data: any) => this.users = data);
  }

}
