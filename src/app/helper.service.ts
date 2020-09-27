import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  employees: any = [{
    name: 'Angular'
  },
  {
    name: 'React'
  },
  {
    name: 'Vue'
  }];

  setEmps(value) {
    this.employees = value;
  }

  getEmps() {
    return this.employees;
  }

  constructor() { }
}
