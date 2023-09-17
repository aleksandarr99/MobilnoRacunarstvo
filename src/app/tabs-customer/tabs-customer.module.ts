import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingCustomerModule } from './tabs-customer-routing.module';

import { TabsPageCustomer } from './tabs-page-customer.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingCustomerModule
  ],
  declarations: [TabsPageCustomer]
})
export class TabsPageModuleCustomer {}
