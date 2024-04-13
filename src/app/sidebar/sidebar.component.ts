import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  userConnecte:any;
  user:any;
  constructor(private route:Router,
              private authService:AuthService,
              private userService:UserService) {
  }
  ngOnInit() {
    this.userConnecte = this.authService.getAuthenticatedUser();
    console.log(this.userConnecte);
    this.getUserByUserName(this.userConnecte.sub);
  }
  public getUserByUserName(username:string){

    let rep=this.userService.getUserByUserName(username);

    rep.subscribe((data: any) => this.user = data);
  }
  public verifAdmin(){
    if (this.userConnecte.sub=="admin"){
      return true;
    }else {return false;}
  }

  goToReservationUser() {
    this.route.navigateByUrl('/listeResUser');

  }

  goTolisteUser() {
    this.route.navigateByUrl('/listeUser');
  }

  goToListeReservation() {
    this.route.navigateByUrl('/listRes')
  }

  goToListeLoan() {
    this.route.navigateByUrl('/listLoan')
  }
  goToCat(){
    this.route.navigateByUrl('/cat')
  }

  goToLoan() {
    this.route.navigateByUrl('/listLoanUser')
  }
}
