import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
OpenAll:any=true;
OpenRegistration:any=false;
OpenLogin:any=false;
OpenCertificate:any=false;
OpenMedical:any=false;
OpenRaiseAnIssue:any=false;

  constructor() { }

  ngOnInit(): void {
  }
  All(){
    this.OpenAll=true;
    this.OpenRegistration=false;
    this.OpenLogin=false;
    this.OpenCertificate=false;
    this.OpenMedical=false;
    this.OpenRaiseAnIssue=false;
}
Registration(){
  this.OpenAll=false;
  this.OpenRegistration=true;
  this.OpenLogin=false;
  this.OpenCertificate=false;
  this.OpenMedical=false;
  this.OpenRaiseAnIssue=false;
}
Login(){
  this.OpenAll=false;
  this.OpenRegistration=false;
  this.OpenLogin=true;
  this.OpenCertificate=false;
  this.OpenMedical=false;
  this.OpenRaiseAnIssue=false;
}
Certificate(){
  this.OpenAll=false;
  this.OpenRegistration=false;
  this.OpenLogin=false;
  this.OpenCertificate=true;
  this.OpenMedical=false;
  this.OpenRaiseAnIssue=false;
}
Medical(){
  this.OpenAll=false;
  this.OpenRegistration=false;
  this.OpenLogin=false;
  this.OpenCertificate=false;
  this.OpenMedical=true;
  this.OpenRaiseAnIssue=false;
}
RaiseAnIssue(){
  this.OpenAll=false;
  this.OpenRegistration=false;
  this.OpenLogin=false;
  this.OpenCertificate=false;
  this.OpenMedical=false;
  this.OpenRaiseAnIssue=true;
}
}
