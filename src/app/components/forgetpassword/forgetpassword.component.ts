import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/services/registration.service';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private router:Router, private service:RegistrationService, 
    private snackbar:MatSnackBar) { }

  ngOnInit() {
  }

email = new FormControl('', [
  Validators.required, Validators.email, ]);

  OnForgetPasswordForm() {
const data = {
email:this.email.value,
};
this.service.forgetpassword(data).subscribe((result) => {
const temp = JSON.stringify(result);
console.log("naveeen"+temp);
this.router.navigate(['/login']);
return this.snackbar.open("Successfull.....");
},
() => {

return this.snackbar.open("Enter Valid Email");
});

this.service.forgetpassword(data);

  }

}
