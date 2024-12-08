import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailFeaturesRoutingModule } from './detail-features-routing.module';
import { FeatureDetailAddComponent } from './feature-detail-add/feature-detail-add.component';
import { FeatureDetailListComponent } from './feature-detail-list/feature-detail-list.component';
import { FeatureDetailDeleteComponent } from './feature-detail-delete/feature-detail-delete.component';
import { FeatureDetailUpdateComponent } from './feature-detail-update/feature-detail-update.component';


@NgModule({
  declarations: [
    FeatureDetailAddComponent,FeatureDetailListComponent,FeatureDetailDeleteComponent,FeatureDetailUpdateComponent
  ],
  imports: [
    CommonModule,
    DetailFeaturesRoutingModule
  ]
})
export class DetailFeaturesModule { }
