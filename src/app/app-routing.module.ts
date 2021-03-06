import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ScanComponent } from './scan/scan.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'scan',
    component: ScanComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
