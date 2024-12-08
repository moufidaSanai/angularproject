import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from '../app-routing.module';
import { LessorAddComponent } from './lessor-add/lessor-add.component';
import { LessorDeleteComponent } from './lessor-delete/lessor-delete.component';
import { LessorListComponent } from './lessor-list/lessor-list.component';
import { LessorRoutingModule } from './lessor-routing.module';
import { LessorUpdateComponent } from './lessor-update/LessorUpdateComponent';

@NgModule({
  declarations: [
    LessorAddComponent,
    LessorUpdateComponent,
    LessorDeleteComponent,
    LessorListComponent
  ],
  imports: [
    CommonModule,
    LessorRoutingModule,
    AppRoutingModule,
    ClarityModule,
    ReactiveFormsModule,
  ],
  exports: [
    LessorAddComponent,
    LessorUpdateComponent,
    LessorListComponent
  ]
})
export class LessorModule { }

