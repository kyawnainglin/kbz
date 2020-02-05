import { Router } from '@angular/router';
import { ApiService } from './../../service/api.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave-form-create',
  templateUrl: './leave-form-create.component.html',
  styleUrls: ['./leave-form-create.component.css']
})
export class LeaveFormCreateComponent implements OnInit {

  submitted = false;
  leaveForm: FormGroup;
  LeaveFormProfile: any = ['Sick', 'Personal', 'Emergency', 'Holiday', 'Others'];

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService,
  ) {
  }

  ngOnInit() {
    this.leaveForm = this.fb.group({
      name: ['', [Validators.required]],
      leaveType: ['', [Validators.required]],
      leaveDate: ['', [Validators.required]]
    });
  }

  // Choose designation with select dropdown
  updateProfile(e) {
    this.leaveForm.get('leaveType').setValue(e, {
      onlySelf: true
    });
  }

  // Getter to access form control
  get myForm() {
    return this.leaveForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (!this.leaveForm.valid) {
      return false;
    } else {
      this.apiService.createLeaveForm(this.leaveForm.value).subscribe(
        (res) => {
          console.log('Leave Form successfully submitted!');
          this.ngZone.run(() => this.router.navigateByUrl('/leaveForm-list'));
        }, (error) => {
          console.log(error);
        });
    }
  }

}
