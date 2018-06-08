import { Injectable } from '@angular/core';
import { Observable, of, Subscriber } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams  } from '@angular/common/http';
import { Employee } from '../../models/Employee';
import { catchError, filter, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public getEmployees(): Observable<any> {
                return this.http.get<any>('./employees/employees.json')
               .pipe(
                   catchError(this.handleCatchError('getEmployees', [])));
    }

    public searchEmployee(searchString: string): Observable<any> {
                return new Observable((subscriber: Subscriber<Array<Employee>>) => {
                this.http.get<any>('./employees/employees.json')
                                .subscribe((employees: any) => {
                                    const employeesList: Array<Employee> = [];
                                    employees.data.forEach((employee: Employee) => {
                                        if (employee.name.toLowerCase()
                                        .includes(searchString.toLowerCase())
                                        || employee.address.city.toLowerCase().includes(searchString.toLowerCase())) {
                                            employeesList.push(employee);
                                        }
                                    });
                                        subscriber.next(employeesList);
                                        subscriber.complete();
                                }, this.handleCatchError);
                });
    }

    public createEmployee(employee: Employee): Observable<any> {
                return this.http.put<Employee>('./employees/employees.json', employee)
               .pipe(
                   catchError(this.handleCatchError('createEmployee', [])));
    }

    public updateEmployee(employee: Employee): Observable<any> {
                return this.http.put<Employee>('./employees/employees.json', employee)
               .pipe(
                   catchError(this.handleCatchError('updateEmployee', [])));
    }

    public getEmployee(id: number): Observable<Employee> {
            return new Observable((subscriber: Subscriber<Employee>) => {
                this.http.get<any>('./employees/employees.json')
                                .subscribe((employees: any) => {
                                    employees.data.forEach((employee: Employee) => {
                                        if (employee.id === id) {
                                            subscriber.next(employee);
                                            subscriber.complete();
                                        }
                                    });
                                        subscriber.next();
                                        subscriber.complete();
                                }, this.handleCatchError);
                });
    }


     /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleCatchError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}
}
