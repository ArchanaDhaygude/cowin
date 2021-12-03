import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, } from '@angular/router';


const routes: Routes = [
  {path:'dashboard', component:DashboardComponent},

 ]

@NgModule({
  declarations: [
    DashboardComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    [RouterModule.forChild(routes)],
  ]
  
  })

export class AdminModule { }
