import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  // singUpForm = new FormGroup({
  //   fname: new FormControl('', Validators.required),
  //   mname: new FormControl('', Validators.required),
  //   lname: new FormControl('', Validators.required),
  //   email: new FormControl(''),
  //   password: new FormControl('', Validators.required),
  //   confirmPassword: new FormControl('', Validators.required),
  // });
  singUpForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.singUpForm = this.fb.group({
      fname: ['', Validators.required],
      mname: [''],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  signUp() {
    // trigger service call

    // prepare json object

    console.log(this.singUpForm.value);
  }
}
