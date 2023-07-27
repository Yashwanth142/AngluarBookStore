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
    localStorage.removeItem('token');
    this.route.navigateByUrl("/login")
  }

}
