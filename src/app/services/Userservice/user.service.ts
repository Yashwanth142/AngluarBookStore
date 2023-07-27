import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  token: any

  constructor(private httpService: HttpService) { }

  signupService(reqdata: any) {
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }

    return this.httpService.postService('registration', reqdata, false, httpHeadersOption)
  }

  loginService(reqdata: any) {
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }
    return this.httpService.postService('login', reqdata, false, httpHeadersOption)
  }

}
