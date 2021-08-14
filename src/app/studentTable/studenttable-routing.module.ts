import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { StudenttableComponent } from './studenttable.component';

const routes: Route[] = [
  {
    path: '',
    component: StudenttableComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudenttableRoutingModule { }
