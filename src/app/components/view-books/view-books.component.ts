import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cartService/cart.service';
import { DataService } from 'src/app/services/datashare/data.service';
import { WishlistService } from 'src/app/services/wishlistService/wishlist.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.scss']
})
export class ViewBooksComponent {
  bookData: any;
  commentdata: any = [];
  show = true;
  bookCount = 1;
  id: any;
  cartitemNo: any; 
  cartArr= [];

  constructor(private dataService: DataService, private cartServive: CartService, private route: Router,
    private snackBar: MatSnackBar, private wishlist: WishlistService) { }

  ngOnInit(): void {
    this.getBookInfo()
    
  }

  Home() {
    this.route.navigateByUrl("/home");
  }

  getBookInfo() {
    this.dataService.currentMessage.subscribe((result: any) => {
      this.bookData = result;
      this.id = this.bookData._id
    })
  }


  AddToCart() {
    console.log("Id: ", this.id);
    this.cartServive.cartAddBooks(this.id).subscribe((result: any) => {
      //console.log("add to cart", result);
      this.getcartBook()
      this.snackBar.open('Added to the Cart !', 'ok', {
        duration: 2000
      });
      this.getcartBook()
    })
  }

  getcartBook() {
    this.cartServive.getCartBooks().subscribe((result: any) => {
      this.cartitemNo = result.result.length;
      this.dataService.sendCartNo(this.cartitemNo);
    })
  }

  AddToWhishlist() {
    console.log("Id: ", this.id);
    this.wishlist.WhishlistAddBooks(this.id).subscribe((result: any) => {
      console.log("add to WhishList", result);
      this.snackBar.open('Added to the WhishList !', 'ok', {
        duration: 2000
      });
    })
  }
}
