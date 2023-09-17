import {Component, Input, OnInit} from '@angular/core';
import {ICar} from "../models/icar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-car-card',
  templateUrl: './customer-car-card.component.html',
  styleUrls: ['./customer-car-card.component.scss'],
})
export class CustomerCarCardComponent  implements OnInit {

  @Input() carPost:ICar
  constructor(private router:Router) { }

  ngOnInit() {}

  CarDetails() {
    this.router.navigate(['car',this.carPost.id]);
  }
}
