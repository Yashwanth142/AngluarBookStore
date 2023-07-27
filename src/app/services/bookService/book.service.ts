import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  token: any;
  constructor(private httpService: HttpService) { }

  getAllBooksData(): Observable<any> {
    this.token = localStorage.getItem('token');
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        authorization: this.token
      })
    }

    return this.httpService.getService("get/book", false, httpHeadersOption)
  }
}
