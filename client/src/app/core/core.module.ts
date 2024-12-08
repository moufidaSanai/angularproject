import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule, ClarityModule,RouterModule

  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    SideNavComponent
  ]
})
export class CoreModule { }
