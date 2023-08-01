import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/datashare/data.service';
import { CartService } from 'src/app/services/cartService/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cartitemNo: any;

  constructor(private route: Router,private dataService:DataService,private cartService:CartService) { }

  ngOnInit(): void {
   this.getCartItemNo()
  }
  getCartItemNo() {
    this.dataService.cartMessage.subscribe((response) => {
      this.cartitemNo = response;
    })
    this.cartService.getCartBooks().subscribe((result: any) => {
      console.log(result.result);
      this.cartitemNo = result.result.length;
      console.log(this.cartitemNo);
    })
  }
  logOut() {
    localStorage.removeItem('token');
    this.route.navigateByUrl("/login")
  }

  SearchBooks(e:any){
    this.dataService.sendSearchdata(e.target.value)
  }

}
