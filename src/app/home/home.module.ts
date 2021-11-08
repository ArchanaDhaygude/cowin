import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingHomeComponent } from './landing-home/landing-home.component';
import { VaccinationCountComponent } from './vaccination-count/vaccination-count.component';
import { LandinghomeComponent } from './landinghome/landinghome.component';
import { VaccinationcountComponent } from './vaccinationcount/vaccinationcount.component';
import { SearchvaccinationpointComponent } from './searchvaccinationpoint/searchvaccinationpoint.component';
import { WhatsnewComponent } from './whatsnew/whatsnew.component';
import { RaiseissueComponent } from './raiseissue/raiseissue.component';
import { StepstovaccinateComponent } from './stepstovaccinate/stepstovaccinate.component';
import { FaqComponent } from './faq/faq.component';
import { OurpartnerComponent } from './ourpartner/ourpartner.component';
import { SummaryvaccinationComponent } from './summaryvaccination/summaryvaccination.component';



@NgModule({
  declarations: [
    LandingHomeComponent,
    VaccinationCountComponent,
    LandinghomeComponent,
    VaccinationcountComponent,
    SearchvaccinationpointComponent,
    WhatsnewComponent,
    RaiseissueComponent,
    StepstovaccinateComponent,
    FaqComponent,
    OurpartnerComponent,
    SummaryvaccinationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
