import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import 'firebase/storage';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {CarService} from "../services/car.service";
import {ICar} from "../models/icar";
import {AuthService} from "../services/auth.service";
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-car-post',
  templateUrl: './add-car-post.component.html',
  styleUrls: ['./add-car-post.component.scss'],
})
export class AddCarPostComponent  implements OnInit {

  myForm: FormGroup;
  private user
  isLoading:boolean=false
  submitted=false
  fileToSave:File;
  imageSrc: string | ArrayBuffer | null = null;


  //morao sam da kopiram storage path u env da bi radio storage
  constructor(private formBuilder: FormBuilder,private carService:CarService,private authService:AuthService) {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', [Validators.required, Validators.min(0)]],
      // file: ['', Validators.required],
    });
    authService.getUser().subscribe(data=>{
      this.user=data
    })
  }

  loadImage(file: File) {
    const reader = new FileReader();

    reader.onload = (e) => {
      this.imageSrc = e.target?.result;
    };

    reader.readAsDataURL(file);
  }
  ngOnInit() {}

  onSubmit() {
    this.isLoading=true;
    this.submitted=true
    if (this.myForm.valid) {
      // Handle form submission here, e.g., send data to a server
      console.log(this.myForm.value);
      let carPost=<ICar>this.myForm.value
      carPost.user_email=this.user.email
      carPost.date_published=new Date().toISOString()
      carPost.id=uuidv4().toString()
      console.log(carPost.date_published)
      this.carService.createPost(carPost, this.fileToSave)

    } else {
      // Handle form validation errors
      console.log("Form is invalid");
    }

    this.reset()
  }



  setFile(event: any) {
    const file = event.target.files[0];
    this.fileToSave=file
    this.loadImage(file)
    // this.fileRef = this.storage.ref(this.filePath);

  }

  private reset() {
    this.isLoading=false;
    this.fileToSave=null
    this.imageSrc=null
    this.submitted=false
    this.myForm.reset()
  }
}
