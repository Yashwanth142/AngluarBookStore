import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();

  private Searchmessage = new BehaviorSubject([]);
  currentSearchMessage = this.Searchmessage.asObservable();

  private cartinfoNum = new BehaviorSubject([]);
  cartMessage = this.cartinfoNum.asObservable();

  constructor() { }

  sendData(message: any) {
    this.messageSource.next(message)
  }

  sendSearchdata(message: any) {
    this.Searchmessage.next(message)
  }

  sendCartNo(message: any) {
    this.cartinfoNum.next(message)
  }
}
