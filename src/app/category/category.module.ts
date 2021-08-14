import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { LayoutComponent } from './layout/layout.component';
import { MatIconModule } from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';



@NgModule({
  declarations: [
    CategoryComponent,
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class CategoryModule { }
