import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessorAddComponent } from './lessor-add/lessor-add.component'; 
import { LessorUpdateComponent } from './lessor-update/LessorUpdateComponent';
import { LessorListComponent } from './lessor-list/lessor-list.component';


const routes: Routes = [
  { path: 'lessor-add', component: LessorAddComponent },
  { path: 'lessor-update', component:LessorUpdateComponent },
  { path: '', component:LessorListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],  // Ici, vous devez passer `routes` à `forChild()`
  exports: [RouterModule]
})
export class LessorRoutingModule { }
