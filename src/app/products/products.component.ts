import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  OnDestroy,
} from '@angular/core';

import { HelperService } from '../helper.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnChanges, OnDestroy {
  @Input() title: string;
  @Input() employee: any;

  @Output() updateName: EventEmitter<any> = new EventEmitter();

  shouldDisplay: boolean = true;
  name: string = 'JK';
  employees: any = [
    {
      name: 'Angular',
    },
    {
      name: 'React',
    },
    {
      name: 'Vue',
    },
  ];

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    console.log(this.title, this.employee);

    // pass employees information to helper service
    this.helperService.emp$.next(this.employees);

    // logic: trigger service call to receive the data from DB
  }

  ngOnChanges() {
    console.log('changes happened');
  }

  displayTitle() {
    console.log(this.title);
    this.name = 'Angular';
    // this.shouldDisplay = false;
    this.helperService.setEmps(this.employees);
    this.updateName.emit(this.title);
  }

  ngOnDestroy() {
    console.log('destroyed');
  }
}
