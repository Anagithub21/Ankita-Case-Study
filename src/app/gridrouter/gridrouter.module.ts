import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridroutingRoutingModule } from './gridrouting-routing.module';
import { GridrouterComponent } from './gridrouter.component';

import {ScrollingModule} from '@angular/cdk/scrolling';


@NgModule({
  declarations: [
    GridrouterComponent
  ],
  imports: [
    CommonModule,
    GridroutingRoutingModule,
    ScrollingModule
  ]
})
export class GridrouterModule { }
