import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Route, RouterModule } from '@angular/router';
import { GridrouterComponent } from './gridrouter.component';

const routes: Route[] = [
  {
    path: '',
    component: GridrouterComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GridroutingRoutingModule { }
