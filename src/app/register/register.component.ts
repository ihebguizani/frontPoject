import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  userForm!:FormGroup;
  role:any;

  constructor(private authn:AuthService,
              private formBuilder:FormBuilder,
              private router:Router,
              private serviceUser:UserService) {
  }
  ngOnInit(): void {
    this.iniateForm();
  }

  iniateForm(){
    this.userForm = this.formBuilder.group({
      password: [''],
      username:[''],
      phoneNumber:[''],
      email:[''],
    });
  }
  public register(){
    const user={

      username:this.userForm.controls['username'].value,
      email:this.userForm.controls['email'].value,
      password:this.userForm.controls['password'].value,
      phoneNumber:this.userForm.controls['phone'].value,
      role:"CLIENT"
    }
    console.log(user);
    this.serviceUser.register(user).subscribe((data:any)=>{
      console.log('data :',data);
      this.router.navigateByUrl('/login');
    })
  }


}
