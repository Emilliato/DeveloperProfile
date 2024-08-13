import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainHomeRoutingModule } from './main-home-routing.module';
import { MainHomeComponent } from './main-home.component';


@NgModule({
  declarations: [
    MainHomeComponent
  ],
  imports: [
    CommonModule,
    MainHomeRoutingModule
  ]
})
export class MainHomeModule { }
