import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../shared/services/employee/employee.service';
import {Employee} from '../shared/models/employee';
import {Address} from '../shared/models/address';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  constructor(private router: ActivatedRoute, private employeeService: EmployeeService, private route: Router) { }
   public employee: Employee = new Employee();
   public address: Address = new Address();
  ngOnInit() {
   this.editEmployee();
  }

  public editEmployee() {
    const id: number = +this.router.snapshot.paramMap.get('id');
    this.employeeService.getEmployee(id).subscribe((employee: Employee) => {
    this.address = employee.address;
    this.employee = employee;
        });
  }

  public onSubmit() {
  this.employee.address = this.address;
  this.employeeService.updateEmployee(this.employee).subscribe(result => {
        alert('Employee updated successfully');
        console.log(JSON.stringify(this.employee));
        this.route.navigate(['/employees']);
  });
}

}
