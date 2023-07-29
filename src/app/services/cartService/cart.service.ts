import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  token: any;
  constructor(private httpService: HttpService) { }

  cartAddBooks(reqdata: any) {
    this.token = localStorage.getItem('token');
    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('add_cart_item/' + reqdata, {}, true, httpHeadersOption)
  }

  getCartBooks() {
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService("get_cart_items", true, httpHeadersOption)
  }
}
