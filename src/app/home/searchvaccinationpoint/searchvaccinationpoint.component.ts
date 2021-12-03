import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/DataSharing/service.service';


@Component({
  selector: 'app-searchvaccinationpoint',
  templateUrl: './searchvaccinationpoint.component.html',
  styleUrls: ['./searchvaccinationpoint.component.css']
})

export class SearchvaccinationpointComponent implements OnInit {
  // OpenclickOpen:any=true;
  // OnclickOpenByPIN:any=false;
  data:any;
  public UserState:any;
  public userDistrict:any;
  public selectedState:any;
  
  constructor(private myService:ServiceService) {
    this.getState();
    this.getDistrict;
   }

  ngOnInit(): void {
  }

  getState(){
      this.myService.getState().subscribe((res:any)=>{
      console.log(res);
      this.UserState=res;
      this.UserState=this.UserState.states;
      console.log(this.UserState);
    })
  }
   onStateSelect(ev:any){
   this.getDistrict(this.selectedState);
  }

  getDistrict(state_id:any){
      console.log(state_id)
      this.myService.getDistrict(state_id)
      this.myService.getDistrict(state_id).subscribe((res)=>{
      this.userDistrict=res;
      this.userDistrict=this.userDistrict.districts;
      console.log(this.userDistrict);
    })
  }



































  
  
//   Openbydist(){
//     this.OpenclickOpen=true;
//     this.OnclickOpenByPIN=false;
// }
// OnBypin(){
//   this.OnclickOpenByPIN=true;
//   this.OpenclickOpen=false;
  
}


