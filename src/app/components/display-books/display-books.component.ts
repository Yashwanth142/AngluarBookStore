import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cartService/cart.service';
import { DataService } from 'src/app/services/datashare/data.service';
import { WishlistService } from 'src/app/services/wishlistService/wishlist.service';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent {
  @Input() AllBooks: any=[];
  @Output() refresh = new EventEmitter();
  displayBooks:any=[]

  page : any
  lowValue: number = 0;
  highValue: number = 20;

  constructor(private route: Router,private dataService:DataService,private cartServive:CartService,
    private snackBar:MatSnackBar,private wishlist:WishlistService) { }

  ngOnInit(): void {
  
  }

  getPaginatorData(event: PageEvent): PageEvent {
    console.log("page");
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }

  viewBookDetails(book: any) {
    console.log("viewBook");
    this.dataService.sendData(book);
    this.route.navigateByUrl("/home/viewBookDetails");
  }

  AddToCart(id:any) {
    console.log("Id: ", id);
    this.cartServive.cartAddBooks(id).subscribe((result: any) => {
      this.snackBar.open('Added to the Cart !', 'ok', {
        duration: 2000
      });
    })
  }

  AddToWhishlist(id:any) {
    console.log("Id: ", id);
    this.wishlist.WhishlistAddBooks(id).subscribe((result: any) => {
      console.log("add to WhishList", result);
      this.snackBar.open('Added to the WhishList !', 'ok', {
        duration: 2000
      });
    })
  }

}
