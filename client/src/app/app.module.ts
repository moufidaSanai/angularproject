import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityIcons, cogIcon, employeeIcon, pencilIcon, plusIcon, trashIcon, userIcon, usersIcon, vmBugIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';
import { ClarityModule } from '@clr/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

ClarityIcons.addIcons(userIcon,cogIcon,vmBugIcon,pencilIcon,trashIcon,plusIcon,usersIcon,employeeIcon);

@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CoreModule ,ClarityModule,BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
