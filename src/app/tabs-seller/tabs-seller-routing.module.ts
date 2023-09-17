import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerHomeComponent} from "../customer-home/customer.home.component";
import {ProfileComponent} from "../profile-component/profile.component";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";
import {TabsPageCustomer} from "../tabs-customer/tabs-page-customer.component";
import {TabsPageSeller} from "./tabs-page-seller.component";
import {AdminHomeComponent} from "../admin-home/admin-home.component";
import {AddCarPostComponent} from "../add-car-post/add-car-post.component";
import {EditCardPostComponent} from "../edit-card-post/edit-card-post.component";

const routes: Routes = [
  {
    path: 'seller',
    component: TabsPageSeller,
    canActivate: [AngularFireAuthGuard],
    children: [
        {
            path: 'home',
            component: AdminHomeComponent
          },
      {
        path:'profile',
        component:ProfileComponent
      },
          {
            path: 'post',
            children: [
              {path:'create',component:AddCarPostComponent},
              {path:'edit',component:EditCardPostComponent}
            ]
          },
      {
        path: '',
        redirectTo: '/seller/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/seller/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingSellerModule {}
