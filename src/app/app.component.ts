import { Component } from '@angular/core';
interface Employee {
  name: string,
  sal: number,
  address: Address
}

interface Address {
  pincode: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isShow: boolean = true;

  title = 'jk';
  employee: Employee = {
    name: 'jk',
    sal: 123,
    address: {
      pincode: 12345
    }
  }

  employees: Employee[] = [
    this.employee, this.employee, this.employee
  ];

  test() {
    var prefix = 'Ng';
    console.log(prefix + this.title);
  }

  updateName(value) {
    // this.isShow = false;
    this.employee.name = value;
  }

}
