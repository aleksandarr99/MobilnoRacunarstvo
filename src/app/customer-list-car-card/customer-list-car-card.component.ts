import { Component, OnInit } from '@angular/core';
import {ICar} from "../models/icar";
import {NavigationEnd, Router} from "@angular/router";
import {CarService} from "../services/car.service";
import {AuthService} from "../services/auth.service";
import {min} from "rxjs";
import {addWarning} from "@angular-devkit/build-angular/src/utils/webpack-diagnostics";

@Component({
  selector: 'app-customer-list-car-card',
  templateUrl: './customer-list-car-card.component.html',
  styleUrls: ['./customer-list-car-card.component.scss'],
})
export class CustomerListCarCardComponent  implements OnInit {
  private user
  carPosts:ICar[]=[]
  constructor(private carService:CarService,private authService:AuthService,private router:Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        authService.getUser().subscribe(data=>{
            this.user=data
            this.fetchAllData()
          },(error)=>{},
          ()=>{

          })
      }
    });
  }
  fetchAllData(){
    this.carPosts=[]

    //get al ne mora po mailu
    this.carService.getCarPosts().then(x=> x.forEach(y=>{

      this.carPosts.push(<ICar>y.data());

    }) );

  }
  ngOnInit() {}

  search(query: string) {
    if(query===null || query.length===0 )
       this.fetchAllData()
    else{
      this.fatchByQuery(query)
    }
  }

  private fatchByQuery(query: string) {
    this.carPosts=[]
    this.carService.searchByQuery(query).then(x=> x.forEach(y=>{

      this.carPosts.push(<ICar>y.data());

    }) );
  }

  async filter(datetime: string , minValue: string, maxValue: string) {

    this.carPosts=[]
   this.carPosts= await this.carService.filter(datetime,minValue,maxValue)
  }
}
