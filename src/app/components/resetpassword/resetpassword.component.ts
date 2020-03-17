import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { RegistrationService } from 'src/app/services/registration.service';
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router, private snackbar: MatSnackBar,
    private service: RegistrationService) { }
  token: String;

  ngOnInit() {
    localStorage.token = this.route.snapshot.paramMap.get("token");
    console.log("token is",this.token)
  }

  password = new FormControl('', [
    Validators.required, Validators.minLength(8),]);
  confirmPassword = new FormControl('', [
    Validators.required, Validators.minLength(8),]);

  OnResetPasswordForm() {

    const data = {
      password: this.password.value,
      con_password: this.confirmPassword.value,

    };

    this.service.resetpassword(data, this.token).subscribe((result) => {
      return this.snackbar.open("ResetPassword Done Successfully");
    },
      () => {
        return this.snackbar.open("Failed to Set Password");
      });

    this.service.resetpassword(data, this.token);

  }
}
