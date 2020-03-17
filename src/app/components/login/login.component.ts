import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private service : RegistrationService,
    private snackbar : MatSnackBar) { }

  ngOnInit() {
  }

email = new FormControl('', [
  Validators.required, Validators.email, ]);
password = new FormControl('',[
  Validators.required, Validators.minLength(8), ]);

  OnLoginForm(){
const data = {
  email : this.email.value,
  password : this.password.value
};
this.service.login(data).subscribe((result) => {
  const temp = JSON.stringify(data);
  const parse = JSON.parse(temp);
   this.router.navigate(['/dashboard']);
   return this.snackbar.open("Successfully Login");
},
() => {
return this.snackbar.open("Failed to Login");
});
this.service.login(data);

  }

}
