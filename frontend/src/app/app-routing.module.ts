import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {TrainDetailsComponent} from './train-details/train-details.component';
import {TrainSheduleComponent} from './train-shedule/train-shedule.component';
import {EditTrainComponent} from './edit-train/edit-train.component';
import {AddTrainComponent} from './add-train/add-train.component';
import {AddTrainSheduleComponent} from './add-train-shedule/add-train-shedule.component';
import {UpdateTrainSheduleComponent} from './update-train-shedule/update-train-shedule.component';
import {RegisterComponent} from './register/register.component';
import {HomeComponent} from './home/home.component';
import { Authguard } from './authguard';
import {RandomGuard} from './randomguard';
 


const routes: Routes = [
  {path:'login', component:LoginComponent, canActivate:[Authguard]},
  {path:'train_details', component:TrainDetailsComponent, canActivate:[RandomGuard], canLoad:[RandomGuard]},
  {path: 'train_shedule', component:TrainSheduleComponent, canActivate:[RandomGuard], canLoad:[RandomGuard]},
  {path :'edit_train/:id', component:EditTrainComponent, canActivate:[RandomGuard], canLoad:[RandomGuard]},
  {path :'add_train', component:AddTrainComponent, canActivate:[RandomGuard], canLoad:[RandomGuard]},
  {path :'add_trainShedule', component:AddTrainSheduleComponent, canActivate:[RandomGuard], canLoad:[RandomGuard]},
  {path :'update_trainShedule/:id', component:UpdateTrainSheduleComponent, canActivate:[RandomGuard], canLoad:[RandomGuard]},
  {path :'register', component:RegisterComponent, canActivate:[RandomGuard], canLoad:[RandomGuard]},
  {path:'', component:HomeComponent,canActivate:[RandomGuard], canLoad:[RandomGuard]}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
