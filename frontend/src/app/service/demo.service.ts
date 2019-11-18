import { Injectable } from '@angular/core';
import {Http,Headers,Response} from '@angular/http';
import{Router} from '@angular/router';
import 'rxjs/add/operator/map';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import Driver from '../Driver';
//import { Driver } from 'selenium-webdriver/chrome';
@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private driver:Driver;

  
 // driver:any;
  constructor(
    private http:Http,
    private router:Router
  ) { 

  }

  
  saveTrain(train){

  //  console.log(driver);
    let header=new Headers();
    header.append('Content-Type','application/json');

    return this.http.post("http://localhost:3000/user/addTrain",train,{headers:header}).map(res=>res.json());
  }

  getAllTrains(){
    let header=new Headers();
    header.append('Content-Type','application/json');

    return this.http.get("http://localhost:3000/user/train_details").map((res:Response)=>res.json());
    
  }

  getByID(id){
     let header=new Headers();
     header.append('Content-Type','application/json');
  
  console.log(id)
    return this.http.get("http://localhost:3000/user/findTrain/"+id).map((res:Response)=>res.json());

  
  }

 deleteByID(id){
  let header=new Headers();
  header.append('Content-Type','application/json');
 
 return this.http.get("http://localhost:3000/user/deleteTrain/"+id);

 }

 updateTrain(TrainName,TrainType,Classes,id) {
  const obj = {
    TrainName,
    TrainType,
    Classes
  }
  console.log(id);
  this.http.post("http://localhost:3000/user/edit_train/"+id, obj).subscribe(res => console.log('Done'));
  
  }



  saveTrainS(trainS){

    //  console.log(driver);
      let header=new Headers();
      header.append('Content-Type','application/json');
  
      return this.http.post("http://localhost:3000/user/addTrainS",trainS,{headers:header}).map(res=>res.json());
    }
  


  getAllTrainsS(){
    let header=new Headers();
    header.append('Content-Type','application/json');

    return this.http.get("http://localhost:3000/user/train_shedule").map((res:Response)=>res.json());
    
  }

  getSByID(id){
    let header=new Headers();
    header.append('Content-Type','application/json');
 
 console.log(id)
   return this.http.get("http://localhost:3000/user/findTrainS/"+id).map((res:Response)=>res.json());

 
 }

  deleteSByID(id){
    let header=new Headers();
    header.append('Content-Type','application/json');
   
   return this.http.get("http://localhost:3000/user/deleteTrainS/"+id);
  
   }



   updateTrainS(TrainName,StartStation,EndStation,Date,StartTime,EndTime,id) {
    const obj = {
      TrainName,
      StartStation,
      EndStation,
      Date,
      StartTime,
      EndTime
    }
    console.log(id);
    this.http.post("http://localhost:3000/user/edit_trainS/"+id, obj).subscribe(res => console.log('Done'));
    
    }




 }


