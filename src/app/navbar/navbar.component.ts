import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  userConnecte:any;
  user:any;

  constructor(public router: Router,
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

  goToLogin() {
    this.router.navigateByUrl('/login');

  }

  goToList() {
    this.router.navigateByUrl('/liste').then();
  }

  goToRegister() {
    this.router.navigateByUrl('/register');
  }

  checkSessionData(): boolean {
    // Récupérer les données de session
    const sessionData = sessionStorage.getItem('token');

    // Retourner true si les données de session existent, sinon false
    return sessionData !== null;

  }
  logout() {
    this.authService.logout();
    sessionStorage.clear();
    this.router.navigateByUrl('/login');
  }

  goToProfil() {
    this.router.navigateByUrl('/profil');
  }
}

