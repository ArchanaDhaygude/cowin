import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchvaccinationpoint',
  templateUrl: './searchvaccinationpoint.component.html',
  styleUrls: ['./searchvaccinationpoint.component.css']
})
export class SearchvaccinationpointComponent implements OnInit {
  OpenclickOpen:any=true;
  OnclickOpenByPIN:any=false;
  constructor() { }

  ngOnInit(): void {
  }
  Openbydist(){
    this.OpenclickOpen=true;
    this.OnclickOpenByPIN=false;
}

OnBypin(){
  this.OnclickOpenByPIN=true;
  this.OpenclickOpen=false;
  
}
}
