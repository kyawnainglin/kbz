import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-holiday-list',
  templateUrl: './holiday-list.component.html',
  styleUrls: ['./holiday-list.component.css']
})
export class HolidayListComponent implements OnInit {

  HolidayForm: any = [];

  constructor(private apiService: ApiService) {
    this.readHolidayForm();
  }

  ngOnInit() {}

  readHolidayForm() {
    this.apiService.getHolidays().subscribe((data) => {
     this.HolidayForm = data;
    });
  }
}
