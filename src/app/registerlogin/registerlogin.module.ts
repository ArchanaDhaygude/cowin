import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule, } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'register', component:RegisterComponent},

 ]

@NgModule({
  declarations: [
    RegisterComponent
  ],
  
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    [RouterModule.forChild(routes)]
  ]
})
export class RegisterloginModule { }
