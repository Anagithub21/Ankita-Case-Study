import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { ServicecounterComponent } from './servicecounter.component';

const routes: Route[] = [
  {
    path: '',
    component: ServicecounterComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicecounterRoutingModule { }
