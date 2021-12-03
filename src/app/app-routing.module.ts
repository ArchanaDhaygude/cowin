import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FaqComponent } from './home/faq/faq.component';
import { LandinghomeComponent } from './home/landinghome/landinghome.component';
import { OurpartnerComponent } from './home/ourpartner/ourpartner.component';
import { RaiseissueComponent } from './home/raiseissue/raiseissue.component';
import { SearchvaccinationpointComponent } from './home/searchvaccinationpoint/searchvaccinationpoint.component';
import { StepstovaccinateComponent } from './home/stepstovaccinate/stepstovaccinate.component';
import { SummaryvaccinationComponent } from './home/summaryvaccination/summaryvaccination.component';
import { VaccinationcountComponent } from './home/vaccinationcount/vaccinationcount.component';
import { WhatsnewComponent } from './home/whatsnew/whatsnew.component';


const routes: Routes = [
  
  {path:'home', loadChildren:()=>import('./home/home.module').then(mod=>mod.HomeModule)},
  {path:'admin', loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  {path:'dashboard', loadChildren:()=>import('./dashboard/dashboard.module').then(mod=>mod.DashboardModule)},
  {path:'registerlogin', loadChildren:()=>import('./registerlogin/registerlogin.module').then(mod=>mod.RegisterloginModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
