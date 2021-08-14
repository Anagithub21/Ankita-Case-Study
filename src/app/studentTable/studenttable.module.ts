import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudenttableRoutingModule } from './studenttable-routing.module';
import { StudenttableComponent } from './studenttable.component';

import { DataTablesModule } from 'angular-datatables';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    StudenttableComponent
  ],
  imports: [
    CommonModule,
    StudenttableRoutingModule,
    DataTablesModule,
    MatSortModule
  ]
})
export class StudenttableModule { }
