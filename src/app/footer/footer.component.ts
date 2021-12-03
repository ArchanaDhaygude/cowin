import { Component, OnInit } from '@angular/core';
import {  CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA} from '@angular/core';
schemas: [ CUSTOM_ELEMENTS_SCHEMA ];
schemas: [ NO_ERRORS_SCHEMA ];


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
