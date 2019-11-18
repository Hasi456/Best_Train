import { Component, OnInit } from '@angular/core';
import {DemoService} from '../service/demo.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit-train',
  templateUrl: './edit-train.component.html',
  styleUrls: ['./edit-train.component.css']
})
export class EditTrainComponent implements OnInit {

 
  trains:any=[];

 
  constructor(private demoservice:DemoService, private route: ActivatedRoute, private router:Router) {
   
   }
    

  ngOnInit() {

 // this.driver=this.demoservice.getter()  

//  this.demoservice.getByID(this.id).subscribe(res=>{
//   console.log(this.id);

//  if(res.state){
//    alert('Data Inserted!');
//  }
//    else{
//    alert('data not inserted');
//    }
  
    //this.route.paramMap.subscribe(paramMap => {
    

    let id=parseInt(this.route.snapshot.paramMap.get('id'));
     this.demoservice.getByID(id).subscribe(res => {
      this.trains = res;
    });
//  });
  
}
  
updateTrain(TrainName,TrainType,Classes,id) {
  this.route.params.subscribe(params => {
    this.demoservice.updateTrain(TrainName,TrainType,Classes,params.id);
    
     this.router.navigate(['train_details']);
  //  location.reload();
    
    
  });
  
}
  
}
