import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {CustomerHomeComponent} from "./customer-home/customer.home.component";
import {ProfileComponent} from "./profile-component/profile.component";
import {CarDetailsComponent} from "./car-details/car-details.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {AddCarPostComponent} from "./add-car-post/add-car-post.component";
import {EditCardPostComponent} from "./edit-card-post/edit-card-post.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {CarDetailsResolverResolver} from "./car-details-resolver.resolver";
import {TabsPageCustomer} from "./tabs-customer/tabs-page-customer.component";


const routes: Routes = [
  {
    path:"car",children:[
      {path: ':id',component:CarDetailsComponent, resolve:{car:CarDetailsResolverResolver} }
    ]
  },
  {path:'login',component:LoginComponent},
  {path:'register',component:SignUpComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
