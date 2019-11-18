import { Component, OnInit } from '@angular/core';
import {DemoService} from '../service/demo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-train-shedule',
  templateUrl: './update-train-shedule.component.html',
  styleUrls: ['./update-train-shedule.component.css'],
  //providers:[DemoService]
})
export class UpdateTrainSheduleComponent implements OnInit {

    traindetails:any=[];
    trainsS:any=[];
    
  
   
    constructor(private demoservice:DemoService, private route: ActivatedRoute, private router:Router) {
     
     }
      
  
    ngOnInit() {
  
     this.demoservice.getAllTrains().subscribe((data)=>{

        this.traindetails=data;
        console.log(data);
      });
      
  
      let id=parseInt(this.route.snapshot.paramMap.get('id'));
       this.demoservice.getSByID(id).subscribe(res => {
        this.trainsS = res;
      });
  //  });
    
  }
    
  updateTrainS(TrainName,StartStation,EndStation,Date,StartTime,EndTime,id) {
    this.route.params.subscribe(params => {
      this.demoservice.updateTrainS(TrainName,StartStation,EndStation,Date,StartTime,EndTime,params.id);
      
       this.router.navigate(['train_shedule']);
    //  location.reload();
      
      
    });
    
  }
  
}


