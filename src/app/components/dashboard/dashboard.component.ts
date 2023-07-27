import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cartitemNo: any;

  constructor(private route: Router) { }

  ngOnInit(): void {
   
  }

  logOut() {
    console.log("log");
    
    this.route.navigateByUrl("/login")
  }

  Home() {
    this.route.navigateByUrl("/home");
  }
}
