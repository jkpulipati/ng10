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

  constructor() {}

  getGridData() {
    // service call using ob
  }
}
