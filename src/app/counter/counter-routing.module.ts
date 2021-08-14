import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Route, RouterModule } from '@angular/router';
import { CounterComponent } from './counter.component';

const routes: Route[] = [
  {
    path: '',
    component: CounterComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CounterRoutingModule { }
