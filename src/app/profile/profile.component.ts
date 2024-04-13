import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  userConnecte:any;
  user!:User;
  constructor(private auth:AuthService,
              private userService:UserService) {
  }
  ngOnInit(): void {
    this.userConnecte = this.auth.getAuthenticatedUser();
    console.log(this.userConnecte);
    console.log(this.userConnecte.sub)
    this.getUserByUserName(this.userConnecte.sub);
  }
  public getUserByUserName(username:string){
    let rep=this.userService.getUserByUserName(username);
    console.log(rep);
    rep.subscribe((data: any) => this.user = data);
    console.log(this.user);
  }

}
