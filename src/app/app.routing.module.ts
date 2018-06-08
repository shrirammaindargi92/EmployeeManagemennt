import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {EditEmployeeComponent} from './edit-employee/edit-employee.component';
const routes: Routes = [
            {path: 'employees', component: EmployeeListComponent},
            {path: 'add', component: AddEmployeeComponent},
            {path: ':id/edit', component: EditEmployeeComponent},
            {path: '**', component: EmployeeListComponent},
            {path: '', redirectTo: '/employees', pathMatch: 'full'}
];

@NgModule({
  exports: [
    RouterModule
  ],
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ] // {enableTracing: true}
})
export class AppRoutingModule {


 }
