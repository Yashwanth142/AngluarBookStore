import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  token: any;
  constructor(private httpService: HttpService) { }

  WhishlistAddBooks(reqdata: any) {
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.postService('add_wish_list/' + reqdata, {}, true, httpHeadersOption)
  }

  getWhishlistBooks() {
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.getService("get_wishlist_items", true, httpHeadersOption)
  }

  deleteWhishlistItems(reqdata: any) {
    this.token = localStorage.getItem('token');

    let httpHeadersOption = {
      headers: new HttpHeaders({
        contentType: 'application/json',
        'x-access-token': this.token
      })
    }
    return this.httpService.deleteService("remove_wishlist_item/"+reqdata, true, httpHeadersOption)
  }

}
