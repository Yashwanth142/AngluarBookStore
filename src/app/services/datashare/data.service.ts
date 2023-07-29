import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private messageSource = new BehaviorSubject([]);
  currentMessage = this.messageSource.asObservable();

  private cartinfoNum = new BehaviorSubject([]);
  cartMessage = this.cartinfoNum.asObservable();

  constructor() { }

  sendData(message: any) {
    this.messageSource.next(message)
  }

  sendCartNo(message: any) {
    this.cartinfoNum.next(message)
  }
}
