import { Injectable } from '@angular/core';
import {IDBUser} from "../models/idb-user";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore:AngularFirestore,private router:Router) { }

  saveUser(userId:string){
    this.firestore.collection<IDBUser>("users").doc(userId).get().subscribe(data=>{
      if(data.get("role")){
        if(data.get("role")==="customer"){
          this.router.navigate(["customer/home"])
        }else{
          this.router.navigate(["seller/home"])
        }
        // this.setUserData(result.user,data.get("role"));
      }
    })
    // this.firestore.collection<IDBUser>("users").doc(user.user.uid).get().subscribe(
    //     data=>{
    //
    //     }
    // )
  }
}
