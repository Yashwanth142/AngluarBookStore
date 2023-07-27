import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  token: any

  constructor(private httpService: HttpService) { }

  adminLogin(reqdata: any) {

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }
    return this.httpService.postService('admin/login', reqdata, false, httpHeadersOption)
  }

  Adminsignup(reqdata: any) {

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }

    return this.httpService.postService('admin/registration', reqdata, false, httpHeadersOption)
  }
}
