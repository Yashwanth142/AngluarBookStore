import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/datashare/data.service';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.component.html',
  styleUrls: ['./admin-dash-board.component.scss']
})
export class AdminDashBoardComponent {
  constructor(private dataService: DataService, private route:Router){}

  Home() {
    this.route.navigateByUrl("/AdminDashBoard");
  }

  SearchBooks(e: any) {
    //console.log(e.target.value);
    this.dataService.sendSearchdata(e.target.value)
  }

  logOut() {
    localStorage.removeItem('token');
    this.route.navigateByUrl("/login")
  }
}
