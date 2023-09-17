import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ICar} from "../models/icar";
import {Observable} from "rxjs";

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent  implements OnInit {
    car:ICar=null;
  constructor(private activatedRoute:ActivatedRoute) {
   this.car=this.activatedRoute.snapshot.data['car'].data()


  }

  ngOnInit() {}

}
