import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    hide = true;
  constructor(private snakbar:MatSnackBar, private serviceObject: RegistrationService, private router: Router) { }

  firstName = new FormControl('', [
    Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z]*'), ]);
  lastName = new FormControl('', [
    Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-Z]*'), ]);
  email = new FormControl('', [
    Validators.required, Validators.email, ]);
  password = new FormControl('', [
    Validators.required, Validators.minLength(8), ]);
  confirmPassword = new FormControl('', [
    Validators.required, Validators.minLength(8), ]);
    
  ngOnInit() {
  }

  onRegistrationForm() {
    const data = {
      firstname: this.firstName.value,
      lastname: this.lastName.value,
      email: this.email.value,
      password: this.password.value,

    };
    console.log(data);
    
    this.serviceObject.registration(data).subscribe((result) => {
      const temp = JSON.stringify(result);
      // console.log(results.message, ':', results);
      this.router.navigate(['/login']);
      this.snakbar.open("Registered Successfully");
    },
   
    () => {
      this.snakbar.open("Registered UnSuccessfull");
    });
    this.serviceObject.registration(data);
  }
  }