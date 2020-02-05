import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeaveFormListComponent } from './components/leave-form-list/leave-form-list.component';
import { LeaveFormCreateComponent } from './components/leave-form-create/leave-form-create.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'create-holidays', component: HolidaysComponent },
  { path: 'leaveForm-list', component: LeaveFormListComponent },
  { path: 'create-leaveForm', component: LeaveFormCreateComponent },
  { path: 'holidayForm-list', component: HolidayListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
