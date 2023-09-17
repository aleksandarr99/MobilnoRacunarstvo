import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {IRegisterUser} from "../models/iregister-user";
import {IDBUser} from "../models/idb-user";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent  implements OnInit {

  private selectedRole="";
  errorMessage:string=''
  showError:boolean=false
  constructor(private authService:AuthService) { }

  ngOnInit() {}

 async signIn(form: NgForm) {
    let regiterUser=<IRegisterUser> form.value;
    let dbUser:IDBUser=<IDBUser>{id:form.value['id'],firstName:form.value['firstName'],lastName:form.value['firstName'],email:form.value['email']}
    if(!this.isFormValid(form)) {
      this.authService.registerUser(regiterUser).then(data=>{
        dbUser.id=data.user!.uid
        dbUser.role=this.selectedRole
        this.authService.saveUserToCollection(dbUser)
      }).catch(e=>{
        this.showError=true
        if(e.code==="auth/email-already-in-use")
          this.errorMessage="Email already in use."
      })

    }
  }

  isFormValid(form:NgForm){
    return form.submitted && ((form.invalid && form.touched && form.dirty) || (form.invalid && !form.touched && !form.dirty))
  }

  handleChangeRole(role: string) {
  this.selectedRole=role
  }
}
