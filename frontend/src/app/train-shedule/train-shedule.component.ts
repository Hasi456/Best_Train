import { Component, OnInit } from '@angular/core';
import {DemoService} from '../service/demo.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-train-shedule',
  templateUrl: './train-shedule.component.html',
  styleUrls: ['./train-shedule.component.css']
})
export class TrainSheduleComponent implements OnInit {


  trainshedule:any=[];


  constructor(private demoService:DemoService, private router:Router) { }

  ngOnInit() {
   // this.getDriverDetails();

 //  this.driver=this.demoService.getter();
   this.demoService.getAllTrainsS().subscribe((data)=>{

      this.trainshedule=data;
      console.log(data);
      //this.driverdetails= Array.of(this.driverdetails);


      
    });
}
/*
editDriver(id){
 this.demoService.setter(this.driver)
  this.router.navigate(['/update_driver/'+id])
}*/
deleteTrainS(id){
  if(confirm("Are you sure you want to delete!!")){
  this.demoService.deleteSByID(id).subscribe(res => {
    console.log('Deleted');
    this.ngOnInit();
  
});
}
}
}