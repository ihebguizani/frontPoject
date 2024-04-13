import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListBookComponent} from "./list-book/list-book.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {ListBookAdminComponent} from "./list-book-admin/list-book-admin.component";
import {LoanComponent} from "./loan/loan.component";
import {ResevationComponent} from "./resevation/resevation.component";
import {ListResByUserComponent} from "./list-res-by-user/list-res-by-user.component";
import {ListLoanByUserComponent} from "./list-loan-by-user/list-loan-by-user.component";
import {ListeLoanComponent} from "./liste-loan/liste-loan.component";
import {ListeReservationComponent} from "./liste-reservation/liste-reservation.component";
import {CategorieComponent} from "./categorie/categorie.component";
import {ListeUtlisateurComponent} from "./liste-utlisateur/liste-utlisateur.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  {path:"liste",component:ListBookComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'admin',component:ListBookAdminComponent},
  {path:'loan/:idBook',component:LoanComponent},
  {path:'detaile/:idBook',component:ResevationComponent},
  {path:'listeResUser',component:ListResByUserComponent},
  {path:'listLoan',component:ListeLoanComponent},
  {path:'listRes',component:ListeReservationComponent},
  {path:'cat',component:CategorieComponent},
  {path:'listeUser',component:ListeUtlisateurComponent},
  {path:'profil',component:ProfileComponent},
  {path:'listLoanUser',component:ListLoanByUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
