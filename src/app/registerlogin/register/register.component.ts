import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/DataSharing/service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public mobNo:any;
  public txnId:any;
  public otp:any;

  constructor(private myService:ServiceService) { }

  ngOnInit(): void {
  }
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

