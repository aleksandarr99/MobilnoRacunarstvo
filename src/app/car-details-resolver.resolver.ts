import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {AngularFirestore, DocumentSnapshot} from "@angular/fire/compat/firestore";
import {ICar} from "./models/icar";
import {CarService} from "./services/car.service";

@Injectable({
  providedIn: 'root'
})
export class CarDetailsResolverResolver implements Resolve<Observable<firebase.default.firestore.DocumentSnapshot<ICar>>> {
  constructor(private carService:CarService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<firebase.default.firestore.DocumentSnapshot<ICar>> {

    let carId = <string>route.params['id'];
    console.log(carId)
    return this.carService.getCarPost(carId)

  }
}
