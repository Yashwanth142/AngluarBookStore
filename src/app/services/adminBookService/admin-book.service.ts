import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class AdminBookService {
  token: any;
  constructor(private httpService: HttpService) { }

  AddBooks(reqdata:any){
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('admin/add/book', reqdata, true, httpHeadersOption)
  }

  updateBooks(Id:any,reqdata: any){
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.updateService('admin/update/book/'+Id , reqdata, true, httpHeadersOption)
  }

  deleteBook(reqdata: any) {
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.deleteService('admin/delete/book/' + reqdata, true, httpHeadersOption)
  }
}
