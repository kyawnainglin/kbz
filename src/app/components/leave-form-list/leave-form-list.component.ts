import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-leave-form-list',
  templateUrl: './leave-form-list.component.html',
  styleUrls: ['./leave-form-list.component.css']
})
export class LeaveFormListComponent implements OnInit {
  LeaveForm: any = [];

  constructor(private apiService: ApiService) {
    this.readLeaveForm();
  }

  ngOnInit() {}

  readLeaveForm() {
    this.apiService.getLeaveForms().subscribe((data) => {
     this.LeaveForm = data;
    });
  }
}
