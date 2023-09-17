import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CarService} from "../services/car.service";
import {ICar} from "../models/icar";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-seller-car-card',
  templateUrl: './seller-car-card.component.html',
  styleUrls: ['./seller-car-card.component.scss'],
})
export class SellerCarCardComponent  implements OnInit {

  @Input() carPost:ICar=null
  @Output() deleteEvent:EventEmitter<string>=new EventEmitter<string>()
  constructor(private carService:CarService,private router:Router) { }

  ngOnInit() {}

  deleteCarPost(id: string) {
    this.carService.deletePost(id)
    this.deleteEvent.emit(id)
  }

  editCarPost() {
    const navigationExtras: NavigationExtras = {
      state: {
        data: this.carPost
      }
    };

    this.router.navigate(['seller/post/edit'],navigationExtras)
  }
}
