import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/DataSharing/service.service';

@Component({
  selector: 'app-vaccinationtrend',
  templateUrl: './vaccinationtrend.component.html',
  styleUrls: ['./vaccinationtrend.component.css']
})
export class VaccinationtrendComponent implements OnInit {
  basicData: any;

  lineStylesData: any;

  basicOptions: any;

  constructor(private myService:ServiceService) { }

  ngOnInit(): void {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
          
      ]
  };
  }

}
