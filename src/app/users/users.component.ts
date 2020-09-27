import { Component, OnInit } from '@angular/core';
import { HelperService } from '../helper.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  emps: any = [];

  constructor(private helperService: HelperService) { }

  ngOnInit(): void {
    this.emps = this.helperService.getEmps();
  }

}
