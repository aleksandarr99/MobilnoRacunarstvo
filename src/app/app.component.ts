import { Component } from '@angular/core';
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private storage:AngularFireStorage) {}
}
