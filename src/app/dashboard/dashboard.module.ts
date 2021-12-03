import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccinationtrendComponent } from './vaccinationtrend/vaccinationtrend.component';
import { RouterModule, Routes } from '@angular/router';
import {ChartModule} from 'primeng/chart';


const routes: Routes = [
  {path:'vaccinationtrend', component:VaccinationtrendComponent},

]

@NgModule({
  declarations: [
    VaccinationtrendComponent
  ],
  imports: [
    CommonModule,
    ChartModule,

    [RouterModule.forChild(routes)],
  
  ]
})
export class DashboardModule { }
