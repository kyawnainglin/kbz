import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveFormCreateComponent } from './leave-form-create.component';

describe('LeaveFormCreateComponent', () => {
  let component: LeaveFormCreateComponent;
  let fixture: ComponentFixture<LeaveFormCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveFormCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
