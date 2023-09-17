import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPageCustomer } from './tabs-page-customer.component';
import {CustomerHomeComponent} from "../customer-home/customer.home.component";
import {ProfileComponent} from "../profile-component/profile.component";
import {AngularFireAuthGuard} from "@angular/fire/compat/auth-guard";

const routes: Routes = [
  {
    path: 'customer',
    component: TabsPageCustomer,
    canActivate: [AngularFireAuthGuard],
    children: [
      {
        path: 'home',
        component:CustomerHomeComponent
      },
      {
        path: 'profile',
        component:ProfileComponent
      },

      {
        path: '',
        redirectTo: '/customer/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/customer/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingCustomerModule {}
