import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveFormListComponent } from './leave-form-list.component';

describe('LeaveFormListComponent', () => {
  let component: LeaveFormListComponent;
  let fixture: ComponentFixture<LeaveFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
