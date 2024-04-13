import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListBookComponent } from './list-book/list-book.component';
import { BookComponent } from './book/book.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PopUpAjouterBookComponent } from './pop-up-ajouter-book/pop-up-ajouter-book.component';
import { PopUpDeleteBookComponent } from './pop-up-delete-book/pop-up-delete-book.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ListBookAdminComponent } from './list-book-admin/list-book-admin.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import { ResevationComponent } from './resevation/resevation.component';
import { LoanComponent } from './loan/loan.component';
import { PopUpUpdateComponent } from './pop-up-update/pop-up-update.component';
import { ListeUtlisateurComponent } from './liste-utlisateur/liste-utlisateur.component';
import { ListeReservationComponent } from './liste-reservation/liste-reservation.component';
import { ListeLoanComponent } from './liste-loan/liste-loan.component';
import {DatePipe} from "@angular/common";
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { CategorieComponent } from './categorie/categorie.component';
import { PopUpAjouterCatComponent } from './pop-up-ajouter-cat/pop-up-ajouter-cat.component';
import { PopUpSuppCatComponent } from './pop-up-supp-cat/pop-up-supp-cat.component';
import { ListResByUserComponent } from './list-res-by-user/list-res-by-user.component';
import { ListLoanByUserComponent } from './list-loan-by-user/list-loan-by-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListBookComponent,
    BookComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    PopUpAjouterBookComponent,
    PopUpDeleteBookComponent,
    ListBookAdminComponent,
    ResevationComponent,
    LoanComponent,
    PopUpUpdateComponent,
    ListeUtlisateurComponent,
    ListeReservationComponent,
    ListeLoanComponent,
    SidebarComponent,
    ProfileComponent,
    CategorieComponent,
    PopUpAjouterCatComponent,
    PopUpSuppCatComponent,
    ListResByUserComponent,
    ListLoanByUserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatButtonModule,
    ],
  providers: [
      DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
