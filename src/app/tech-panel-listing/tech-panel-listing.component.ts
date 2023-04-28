import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClient } from '@angular/common/http';
import { FetchmemberService } from '../fetchmember.service';
import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-tech-panel-listing',
  templateUrl: './tech-panel-listing.component.html',
  styleUrls: ['./tech-panel-listing.component.css']
})
export class TechPanelListingComponent implements OnInit {
  filterName: string = '';
  filterPosition: string = '';
  currentPage: number = 1;
  members: any = [];

  constructor(private router: Router, private http: HttpClient, private fetchMemberService: FetchmemberService) { }
  getMemberList() {
    this.fetchMemberService.getMembers().subscribe((response) => {
      this.members = response;
    })
  }
  get filteredMembers() {
    return this.members.filter((member: { name: string; position: string; }) => {
      return member.name.toLowerCase().includes(this.filterName.toLowerCase()) &&
        member.position.toLowerCase().includes(this.filterPosition.toLowerCase());
    });
  }

  get totalMembers() {
    return this.filteredMembers.length;
  }
  fileDownload(){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'Report Data',
      useBom: true,
      noDownload: false,
      headers: ["EmployeeId", "Name", "Email", "Position"]
    };
   
    new ngxCsv(this.filteredMembers, "FilteredReport", options);
  }
  ngOnInit() {
    this.getMemberList()
  }
  redirect(member: any) {
    localStorage.setItem('memberdata', JSON.stringify(member))
    this.router.navigate(['/tech-panel-details-page']);
  }
  

}


