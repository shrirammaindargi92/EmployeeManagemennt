import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/services/employee/employee.service';
import { Employee } from '../shared/models/Employee';
import {Observable, Subject} from 'rxjs';
import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
        public employees: Array<Employee>;

  ngOnInit() {
    this.getEmployees();
  }
  public getEmployees() {
    this.employeeService.getEmployees().subscribe(employee => {
          this.employees = employee.data;
          this.employees.forEach((employeed: Employee) => {
              if (isNaN(parseFloat(employeed.phone))) {
                employeed.phone = 'NA';
              }
          });
    });
  }
  // Push a search term into the observable stream.
  search(term: string): void {
    if (term.length <= 0) {
        this.getEmployees();
    }
     this.employeeService.searchEmployee(term).subscribe((employees: Array<Employee>) => {
          this.employees = employees;
        });
  }

}
