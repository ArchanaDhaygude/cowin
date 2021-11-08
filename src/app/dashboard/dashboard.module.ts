import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { VaccinationtrendComponent } from './vaccinationtrend/vaccinationtrend.component';



@NgModule({
  declarations: [
    SummaryComponent,
    VaccinationtrendComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
