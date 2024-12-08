import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './add-user/add-user.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  declarations: [
    AddUserComponent,
    UpdateUserComponent,
    
  ],
  imports: [
    CommonModule,ClarityModule,FormsModule,ReactiveFormsModule,//import for forms group
  ],exports:[
    AddUserComponent,    UpdateUserComponent


  ]
})
export class UserModule { }