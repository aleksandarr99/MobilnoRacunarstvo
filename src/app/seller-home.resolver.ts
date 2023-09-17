import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {HttpClient} from "@angular/common/http";
import firebase from "firebase/compat";
import Firestore = firebase.firestore.Firestore;
import {CarService} from "./services/car.service";
import {ICar} from "./models/icar";

@Injectable({
  providedIn: 'root'
})
export class SellerHomeResolver implements Resolve<ICar[]> {
  constructor(private carService:CarService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICar[]> {

    let carPosts:ICar[]=[]
   // let querySnapshot =  this.carService.getCarPosts('');
   // querySnapshot.forEach(y=> carPosts.push(<ICar>y.data()));

    return  of(carPosts)
  }
}
