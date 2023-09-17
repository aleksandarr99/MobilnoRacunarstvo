import { Component, OnInit } from '@angular/core';
import {CarService} from "../services/car.service";
import {AuthService} from "../services/auth.service";
import {ICar} from "../models/icar";
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-seller-home-list-posts',
  templateUrl: './seller-home-list-posts.component.html',
  styleUrls: ['./seller-home-list-posts.component.scss'],
})
export class SellerHomeListPostsComponent  implements OnInit {
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

  ngOnInit() {

  }

  fetchAllData(){
    this.carPosts=[]
    this.carService.getCarPostsByEmail(this.user.email).then(x=> x.forEach(y=>{

      this.carPosts.push(<ICar>y.data());

    }) );

  }

  handleDeletedItem(id: string) {
    this.carPosts=this.carPosts.filter(element=> element.id!==id)
  }
}
