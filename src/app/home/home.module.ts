import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandinghomeComponent } from './landinghome/landinghome.component';
import { VaccinationcountComponent } from './vaccinationcount/vaccinationcount.component';
import { SearchvaccinationpointComponent } from './searchvaccinationpoint/searchvaccinationpoint.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { RaiseissueComponent } from './raiseissue/raiseissue.component';
import { StepstovaccinateComponent } from './stepstovaccinate/stepstovaccinate.component';
import { FaqComponent } from './faq/faq.component';
import { OurpartnerComponent } from './ourpartner/ourpartner.component';
import { SummaryvaccinationComponent } from './summaryvaccination/summaryvaccination.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {  CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA} from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';


const routes: Routes = [
 {path:'landing', component:LandinghomeComponent},
//  {path:'raiseissue',component:RaiseissueComponent}
]

@NgModule({
  declarations: [
    LandinghomeComponent,
    VaccinationcountComponent,
    SearchvaccinationpointComponent,
    WhatsnewComponent,
    RaiseissueComponent,
    StepstovaccinateComponent,
    FaqComponent,
    OurpartnerComponent,
    SummaryvaccinationComponent,
   
  ],

  imports: [
    CommonModule,
    FormsModule,
    [RouterModule.forChild(routes)],
    TabViewModule,
    ButtonModule

  
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]

})
export class HomeModule { }
