import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesAddComponent } from './features-add/features-add.component';
import { FeaturesUpdateComponent } from './features-update/features-update.component';
import { FeaturesDeleteComponent } from './features-delete/features-delete.component';
import { FeaturesListComponent } from './features-list/features-list.component';
import { ClarityModule } from '@clr/angular';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FeaturesAddComponent,
    FeaturesUpdateComponent,
    FeaturesDeleteComponent,
    FeaturesListComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,ClarityModule,ReactiveFormsModule
  ]
})
export class FeaturesModule { }
