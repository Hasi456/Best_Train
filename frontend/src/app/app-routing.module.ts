import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TrainDetailsComponent} from './train-details/train-details.component';
import {TrainSheduleComponent} from './train-shedule/train-shedule.component';
import {EditTrainComponent} from './edit-train/edit-train.component';
import {AddTrainComponent} from './add-train/add-train.component';
import {AddTrainSheduleComponent} from './add-train-shedule/add-train-shedule.component';
import {UpdateTrainSheduleComponent} from './update-train-shedule/update-train-shedule.component';
 
const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'train_details', component:TrainDetailsComponent},
  {path: 'train_shedule', component:TrainSheduleComponent},
  {path :'edit_train/:id', component:EditTrainComponent},
  {path :'add_train', component:AddTrainComponent},
  {path :'add_trainShedule', component:AddTrainSheduleComponent},
  {path :'update_trainShedule/:id', component:UpdateTrainSheduleComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
