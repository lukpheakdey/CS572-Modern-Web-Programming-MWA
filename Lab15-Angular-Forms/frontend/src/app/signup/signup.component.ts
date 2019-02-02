import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.signupForm = formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      accept: [0]
    });
  }
  ngOnInit() {
  }

  onSubmit() {
    console.log('Signup');
    const formValues = this.signupForm.value;
    const user = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password
    };

    this.authService.signup(user).subscribe( response => console.log(response), error => console.log(error));
  }
}

