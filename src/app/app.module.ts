import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandinghomeComponent } from './home/landinghome/landinghome.component';
import { VaccinationcountComponent } from './home/vaccinationcount/vaccinationcount.component';
import { SearchvaccinationpointComponent } from './home/searchvaccinationpoint/searchvaccinationpoint.component';
import { WhatsnewComponent } from './home/whatsnew/whatsnew.component';
import { RaiseissueComponent } from './home/raiseissue/raiseissue.component';
import { StepstovaccinateComponent } from './home/stepstovaccinate/stepstovaccinate.component';
import { FaqComponent } from './home/faq/faq.component';
import { SummaryvaccinationComponent } from './home/summaryvaccination/summaryvaccination.component';
import { OurpartnerComponent } from './home/ourpartner/ourpartner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandinghomeComponent,
    VaccinationcountComponent,
    SearchvaccinationpointComponent,
    WhatsnewComponent,
    RaiseissueComponent,
    StepstovaccinateComponent,
    FaqComponent,
    SummaryvaccinationComponent,
    OurpartnerComponent


  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
