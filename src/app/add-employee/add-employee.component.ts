import { Component, OnInit } from '@angular/core';
import {Employee} from '../shared/models/employee';
import {Address} from '../shared/models/address';
import {Router} from '@angular/router';
import {EmployeeService} from '../shared/services/employee/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private route: Router, private employeeService: EmployeeService) { }
public employee: Employee = new Employee();
public address: Address = new Address();
  ngOnInit() {
  }
public onSubmit() {
  this.employee.address = this.address;
  this.employeeService.createEmployee(this.employee).subscribe(result => {
        alert('Employee added successfully');
        console.log(JSON.stringify(this.employee));
        this.route.navigate(['/employees']);
  });
}
}
