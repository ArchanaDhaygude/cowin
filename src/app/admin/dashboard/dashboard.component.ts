import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/DataSharing/service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private myService:ServiceService) { }
  Form:any;
  isSubmitted:boolean=false;

  public mobNo:any;
  public txnId:any;
  public otp:any;
  
  ngOnInit(): void {
  }
  //   this.Form = this.f.group({
  //     phone:[''],
  // }
  // onSubmitForm(){
  //   console.log(this.Form);
  //   console.log(this.Form.value);
  //   this.isSubmitted=true;
  //   }
    
  //   get f(){
  //   console.log(this.Form.controls.fname);
  //   return this.Form.controls;
  //   }

generateOtp(){
  console.log(this.mobNo);
  this.myService.generateOtp(this.mobNo).subscribe((res)=>{
    console.log(res);
    let data:any = res ;
    console.log(data.txnId);
    this.txnId=data.txnId;

    // this.ConfirmOtp();
  })
}

confirmOtp(){
  this.myService.confirmOtp(this.txnId).subscribe((res)=>{
    console.log(res);
    let requestData={
    "otp" :this.otp,
    "txnId": this.txnId
    }
  })
}
}












  // onSubmitForm(){
  //   console.log(this.Form);
  //   console.log(this.Form.value);
  //   this.isSubmitted=true;
  //   }

  //   get f(){
  //     console.log(this.Form.controls.fname);
  //     return this.Form.controls;
  //     }
  

