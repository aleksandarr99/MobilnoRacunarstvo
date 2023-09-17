import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {NavigationComponent} from "./navigation/navigation.component";
import {CarDetailsComponent} from "./car-details/car-details.component";
import {CustomerCarCardComponent} from "./customer-car-card/customer-car-card.component";
import {CustomerListCarCardComponent} from "./customer-list-car-card/customer-list-car-card.component";
import {SellerHomeListPostsComponent} from "./seller-home-list-posts/seller-home-list-posts.component";
import {EditCardPostComponent} from "./edit-card-post/edit-card-post.component";
import {SellerCarCardComponent} from "./seller-car-card/seller-car-card.component";
import {AddCarPostComponent} from "./add-car-post/add-car-post.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {RadioButtonCustomComponent} from "./radio-button-custom/radio-button-custom.component";
import {CustomerHomeComponent} from "./customer-home/customer.home.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {LoginComponent} from "./login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ProfileComponent} from "./profile-component/profile.component";
import {TabsPageModuleCustomer} from "./tabs-customer/tabs-customer.module";
import {TabsPageModuleSeller} from "./tabs-seller/tabs-seller.module";

@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    SignUpComponent,
    CustomerHomeComponent,
    RadioButtonCustomComponent,
    AdminHomeComponent,
    AddCarPostComponent,
    SellerCarCardComponent,
    EditCardPostComponent,
    SellerHomeListPostsComponent,
    CustomerListCarCardComponent,
    CustomerCarCardComponent,
    CarDetailsComponent,
    NavigationComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TabsPageModuleSeller,
    TabsPageModuleCustomer,
    AngularFireModule.initializeApp(environment.firebase),

  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
