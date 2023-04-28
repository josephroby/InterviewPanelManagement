import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech-panel-details-page',
  templateUrl: './tech-panel-details-page.component.html',
  styleUrls: ['./tech-panel-details-page.component.css']
})
export class TechPanelDetailsPageComponent implements OnInit {
  

  constructor() { }
  memberDetails: any;

  ngOnInit(): void {
     this.memberDetails =JSON.parse(localStorage.getItem('memberdata') || ""); 
  }
  

}
