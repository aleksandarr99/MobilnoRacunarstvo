import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ICar} from "../models/icar";
import {Router} from "@angular/router";
import {CarService} from "../services/car.service";

@Component({
  selector: 'app-edit-card-post',
  templateUrl: './edit-card-post.component.html',
  styleUrls: ['./edit-card-post.component.scss'],
})
export class EditCardPostComponent  implements OnInit {

  myForm: FormGroup;
   file: File=null
  imageSrc: string | ArrayBuffer | null = null;
  carPost:ICar=null

  //morao sam da kopiram storage path u env da bi radio storage
   constructor(private formBuilder: FormBuilder,private router:Router,private carService:CarService) {
      this.carPost =  <ICar>this.router.getCurrentNavigation().extras.state['data']
    console.log(this.carPost)
    this.myForm = this.formBuilder.group({
      name: [this.carPost?.name, Validators.required],
      price: [this.carPost?.price, [Validators.required, Validators.min(0)]],
      description: [this.carPost?.description, [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.myForm.valid) {
      // Handle form submission here, e.g., send data to a server
      this.carService.updateCarPost(<ICar>this.myForm.value,this.carPost.id,this.file)
    } else {
      // Handle form validation errors
      console.log("Form is invalid");
    }
  }


  loadImage(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      this.imageSrc = e.target?.result;
    };

    reader.readAsDataURL(file);
  }
  setFile(event: any) {
    const file = event.target.files[0];
    this.file=file;
    if (file) {
      this.loadImage(file);
    }

  }
}
