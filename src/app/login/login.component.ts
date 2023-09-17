import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {ILoginUser} from "../models/ILoginUser";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  public  isLoading=false;
  public errorMessage:string="";
  public showError:boolean=false;
  constructor(private router:Router,private authService:AuthService,private userService:UserService) { }

  ngOnInit() {}

   login(form: NgForm){
    this.isLoading=true;
    this.showError=false;
    this.errorMessage="";
    try{
      if(!this.isFormValid(form)){
        let iuser =<ILoginUser>form.value
         this.authService.loginUser(iuser).then(user=>{
           // this.setUserData(result.user,iuser.);
           this.userService.saveUser(user.user.uid)
           // this.authService.setUserData(user.user)
         }).catch(error=>{
           this.showError=true;
           this.errorMessage="User does not exist."
         })

      }
  }
  catch (e){
    this.showError=true;
    this.errorMessage="User does not exist,please register first";

  }
    finally {
      this.isLoading=false;
    }

  }

  isFormValid(form:NgForm){
    return form.submitted && ((form.invalid && form.touched && form.dirty) || (form.invalid && !form.touched && !form.dirty))
  }

  navigateToSignUp() {
    this.errorMessage=""
    this.showError=false
    this.router.navigate(["/register"])
  }
}
