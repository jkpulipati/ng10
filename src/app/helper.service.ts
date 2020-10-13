import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  emp$: Subject<any> = new Subject();

  employees: any = [];

  setEmps(value) {
    this.employees = value;
  }

  getEmps() {
    return this.employees;
  }

  constructor(private http: HttpClient) {}

  getGridData() {
    // service call using ob
  }

  getusers() {
    return this.http.get('https://reqres.in/api/users?page=2');
  }

  getuserById() {
    return this.http.get('https://reqres.in/api/users/2');
  }
}
