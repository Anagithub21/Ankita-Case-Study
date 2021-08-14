import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'banner' },
  {
    path: '',
    children: [{ path: 'banner', loadChildren: () => import('./banner/banner.module').then((m) => m.BannerModule) }]
  },
  {
    path: '',
    children: [{ path: 'category', loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule) }]
  },
  {
    path: '',
    children: [{ path: 'counter', loadChildren: () => import('./counter/counter.module').then((m) => m.CounterModule) }]
  },
  {
    path: '',
    children: [{ path: 'serviceCounter', loadChildren: () => import('./servicecounter/servicecounter.module').then((m) => m.ServicecounterModule) }]
  },
  {
    path: '',
    children: [{ path: 'studenttable', loadChildren: () => import('./studentTable/studenttable.module').then((m) => m.StudenttableModule) }]
  },
  {
    path: '',
    children: [{ path: 'grid', loadChildren: () => import('./gridrouter/gridrouter.module').then((m) => m.GridrouterModule) }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
