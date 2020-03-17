import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http : HttpClient) { }

registration(arr) : Observable<any> {
  return this.http.post(environment.UserUrl+environment.registerUrl, arr);
}
login(arr) : Observable<any> {
  return this.http.post(environment.UserUrl+environment.loginUrl, arr);
}
forgetpassword(arr) : Observable<any> {
  return this.http.post( environment.UserUrl+environment.forgetpasswordUrl, arr);
}
resetpassword(arr,token) : Observable<any> {
  return this.http.post(environment.UserUrl+environment.resetpasswordUrl, arr,{headers:new HttpHeaders().set('token',localStorage.token) });
}


}
