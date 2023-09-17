import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-radio-button-custom',
  templateUrl: './radio-button-custom.component.html',
  styleUrls: ['./radio-button-custom.component.scss'],
})
export class RadioButtonCustomComponent  implements OnInit {

  selectedRole:string="customer";
   @Output() selectedRoleEmitter:EventEmitter<string>=new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.selectedRoleEmitter.emit(this.selectedRole)
  }

  changeSelectedRole(role: string) {
    this.selectedRole=role
    this.selectedRoleEmitter.emit(this.selectedRole);
  }
}
