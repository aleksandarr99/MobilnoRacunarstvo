import { Injectable } from '@angular/core';
import {ICar} from "../models/icar";
import {AngularFirestore, AngularFirestoreCollection, DocumentSnapshot} from "@angular/fire/compat/firestore";
import {IDBUser} from "../models/idb-user";
import {Router} from "@angular/router";
import {min, Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carPostCollection:AngularFirestoreCollection<ICar>
  private searchQuery:string=''
  constructor(private firestore:AngularFirestore,private router:Router,private storage:AngularFireStorage,private auth:AuthService) {

    this.carPostCollection = firestore.collection("car-posts");
  }

  getCarPost(id:string){
     return this.carPostCollection.doc(id).get()
  }

  createPost(carPost: ICar, fileToSave:File) {


    let storagePath=this.auth.user.uid+'/'+carPost.id
    this.storage.upload(storagePath,fileToSave).then(data=>{

        data.ref.getDownloadURL().then(data=>{
          this.carPostCollection.doc(carPost.id).set({...carPost,image_path:data}).then(data=>{
            this.router.navigate(['seller/home'])
          })
        })


    })
  }
  deletePost(id:string){
    let storagePath=this.auth.user.uid+'/'+id

    this.carPostCollection.doc(id).delete().then(data=>{
      this.storage.ref(storagePath).delete()
    })
  }

   async  getCarPostsByEmail(email) {
    return await this.carPostCollection.ref.where('user_email','==',email).get()
  }

  async updateCarPost(carPost: ICar, id: string, file: File) {

    if(file===null){
      await this.carPostCollection.doc(id).update(carPost).then(()=> this.router.navigate(['seller/home']))
    }else{
      let storagePath=this.auth.user.uid+'/'+id
        await  this.storage.ref(storagePath).put(file)
        this.storage.ref(storagePath).getDownloadURL().subscribe(data=>{
          carPost.image_path=data
          this.carPostCollection.doc(id).update(carPost).then(()=> this.router.navigate(['seller/home']))
        })
    }
  }

async  searchByQuery(query: string) {
    //contains
    this.searchQuery=query
    return await this.carPostCollection.ref.where('name', '>=', query).where('name', '<=', query + '\uf8ff').get()
  }

 async getCarPosts() {
    this.searchQuery=''
    return await this.carPostCollection.ref.get();
  }


 async filter(datetime: string, minValue: string, maxValue: string) {

    console.log(datetime)
    console.log(minValue)
    console.log(maxValue)
    let result:ICar[]=[]
   if(minValue!=null) {
     var iqueryPrice = await this.queryMinPrices(minValue);

     iqueryPrice.forEach(x => {
       result.push(<ICar>x.data())

     })
   }
     if(maxValue!=null){
       var iqueryPrice = await this.queryMaxPrices( maxValue);
       iqueryPrice.forEach(x=>{
             if (result.filter(e => e.id !== (<ICar>x.data()).id).length > 0) {
               result.push(<ICar>x.data())
             }
           })

    }
   if(datetime!=null){
     var iqueryDate = await this.queryDate(datetime);

     iqueryDate.forEach(x=>{
       if (result.filter(e => e.id !== (<ICar>x.data()).id).length > 0) {
         result.push(<ICar>x.data())
       }
     })
   }





    return result

  }

  private async queryMinPrices(minValue: string) {
      return await this.carPostCollection.ref.where('price','>=',minValue).get()
  }
  private async queryMaxPrices( maxValue: string) {
      return await this.carPostCollection.ref.where('price','<=',maxValue).get()
  }
  async  queryDate(date:string){
    return      await  this.carPostCollection.ref.where('date_published','>=',date).get()
  }


}
