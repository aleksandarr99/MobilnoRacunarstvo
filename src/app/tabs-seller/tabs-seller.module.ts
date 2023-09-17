import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingSellerModule } from './tabs-seller-routing.module';

import { TabsPageSeller} from './tabs-page-seller.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingSellerModule
  ],
  declarations: [TabsPageSeller]
})
export class TabsPageModuleSeller {}
