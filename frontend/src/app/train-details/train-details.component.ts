import { Component, OnInit } from '@angular/core';
import {DemoService} from '../service/demo.service';
import {Router} from '@angular/router';

@Component({
 selector: 'app-train-details',

  templateUrl: './train-details.component.html',
  styleUrls: ['./train-details.component.css'],
  providers:[DemoService]

})
export class TrainDetailsComponent implements OnInit {

  traindetails:any=[]


  constructor(private demoService:DemoService, private router:Router) { }

  ngOnInit() {
   // this.getDriverDetails();

 //  this.driver=this.demoService.getter();
   this.demoService.getAllTrains().subscribe((data)=>{

      this.traindetails=data;
      console.log(data);
      //this.driverdetails= Array.of(this.driverdetails);


      
    });
}
/*
editDriver(id){
 this.demoService.setter(this.driver)
  this.router.navigate(['/update_driver/'+id])
}*/
deleteTrain(id){
  if(confirm("Are you sure you want to delete!!")){
  this.demoService.deleteByID(id).subscribe(res => {
    console.log('Deleted');
    this.ngOnInit();
  
});
}
}
}