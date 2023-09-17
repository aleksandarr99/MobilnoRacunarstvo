import {Component, OnInit, ViewChild} from '@angular/core';
import {IonDatetime, IonInput, IonModal} from "@ionic/angular";
import {CustomerListCarCardComponent} from "../customer-list-car-card/customer-list-car-card.component";
import {max, min} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './customer.home.component.html',
  styleUrls: ['./customer.home.component.scss'],
})
export class CustomerHomeComponent implements OnInit {

  tab:number=1
  constructor() { }

  ngOnInit() {}
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild(CustomerListCarCardComponent) customerList:CustomerListCarCardComponent
  dateTime:string=(new Date()).toISOString()
  minPrice:string="1"
  maxPrice:string="100000"
  name: string='';
  showError=false
  errorMessage=''

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    if(parseInt(this.minPrice)<=0){
      this.showError=true
      this.errorMessage='Min price cant be <=0'
      return
    }
    if(parseInt(this.maxPrice)<=0){
      this.showError=true
      this.errorMessage='Max price cant be <=0'
      return
    }
    if(parseInt(this.maxPrice)<=parseInt(this.minPrice)){
      this.showError=true
      this.errorMessage='Max price cant be less then Min Price'
      return
    }

    this.customerList.filter(this.dateTime,this.minPrice,this.maxPrice)
    this.modal.dismiss(this.name, 'confirm');
    this.showError=false
  }


  search(event: any) {
    const query = event.target['value'].toLowerCase();
    this.customerList.search(query)
  }

  protected readonly max = max;

  tabChange(number: number) {

    this.tab=number
  }
}
