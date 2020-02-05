import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent {

  submitted = false;
  holidayForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService) {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
      this.holidayForm = this.fb.group({
      name: ['', [Validators.required]],
      holidayDate: ['', [Validators.required]]
    });
  }
  get myForm() {
    return this.holidayForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (!this.holidayForm.valid) {
      return false;
    } else {
      this.apiService.createHoliday(this.holidayForm.value).subscribe(
        (res) => {
          console.log('Holiday Form successfully submitted!');
          this.ngZone.run(() => this.router.navigateByUrl('/holidayForm-list'));
        }, (error) => {
          console.log(error);
        });
    }
  }
}
