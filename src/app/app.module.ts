import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {EmployeeService} from '../app/shared/services/employee/employee.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {AppRoutingModule} from './app.routing.module';
import {FormsModule} from '@angular/forms';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
