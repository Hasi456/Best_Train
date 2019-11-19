import { Component, OnInit } from '@angular/core';
import {DemoService} from '../service/demo.service';
import {Router} from '@angular/router';
import { Time } from '@angular/common';


@Component({
  selector: 'app-add-train-shedule',
  templateUrl: './add-train-shedule.component.html',
  styleUrls: ['./add-train-shedule.component.css'],
  providers:[DemoService]
})
export class AddTrainSheduleComponent implements OnInit {
  traindetails:any=[];
  TrainName:String;
  StartStation:String;
  EndStation:String;
  Date:Date;
  StartTime:Time;
  EndTime:Time;
  

  constructor(private demoService:DemoService, private router:Router) { }

  
  ngOnInit() {
   
   this.demoService.getAllTrains().subscribe((data)=>{

      this.traindetails=data;
      console.log(data);
     

      
    });
}

  


save(){

  const trainS={
    TrainName:this.TrainName,
    StartStation:this.StartStation,
    EndStation:this.EndStation,
    Date:this.Date,
    StartTime:this.StartTime,
    EndTime:this.EndTime,
   
    
  };

  console.log(trainS);

  

   this.demoService.saveTrainS(trainS).subscribe(res=>{
     console.log(res);
   //  if(res.state)
     //this.FlashMessage.show('Failed to insert', { cssClass: 'alert-dander', timeout: 2000 });
  //   alert("Failed to Insert");
    // else
     //this.FlashMessage.show('Added Successfully', {cssClass:'alert-success', timeout:2000});
    if(res.state){
      alert('Data Inserted!');
    }
      else{
      alert('data not inserted');
      }
      
   });
   
}

}




