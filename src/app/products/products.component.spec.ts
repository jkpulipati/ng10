import { HttpClient } from '@angular/common/http';

import { HttpClientTestingModule } from '@angular/common/http/testing';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HelperService } from '../helper.service';

import { ProductsComponent } from './products.component';

fdescribe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let helperService: HelperService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ProductsComponent],
      providers: [HelperService, HttpClient],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    helperService = TestBed.get(HelperService);
    component = fixture.componentInstance;

    // spy/ mock data
    spyOn(helperService, 'getusers').and.returnValue(
      of({
        name: 'test',
      })
    );

    component.employee = {
      name: 'Test',
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displayTitle function test', () => {
    spyOn(helperService, 'getuserById').and.returnValue(
      of({
        name: 'test1',
      })
    );

    component.displayTitle();

    expect(component.name).toEqual('Angular');
  });

  it('ngOnChanges function test', () => {
    component.ngOnChanges();

    expect(component).toBeTruthy();
  });
});
