import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LandinghomeComponent } from './home/landinghome/landinghome.component';


const routes: Routes = [
  {path:"header", component:HeaderComponent},
  // {path:"landinghome", component:LandinghomeComponent},
  {path:"footer", component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
