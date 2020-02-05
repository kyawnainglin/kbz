import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './service/api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { LeaveFormCreateComponent } from './components/leave-form-create/leave-form-create.component';
import { LeaveFormListComponent } from './components/leave-form-list/leave-form-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HolidayListComponent } from './components/holiday-list/holiday-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeEditComponent,
    EmployeeListComponent,
    NavbarComponent,
    HolidaysComponent,
    LeaveFormCreateComponent,
    LeaveFormListComponent,
    HolidayListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
