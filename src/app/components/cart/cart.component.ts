import { ChangeDetectorRef, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/Userservice/user.service';
import { CartService } from 'src/app/services/cartService/cart.service';
import { DataService } from 'src/app/services/datashare/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  panelOpenState = false;
  allCartBooks: any = [];
  id: any;
  orderId: any;
  bookCount: any;
  hide: boolean = false;
  show: boolean = false;
  updatepage: boolean = false;
  step = 0;
  totalAmount: any = 0;
  orderArray: any = [];
  cartitemNo: any = [];

  name: any;
  mobile: any;
  city: any;
  state: any;
  addressType: any;
  address: any

  constructor(private cartService: CartService, private userService: UserService, private dataService: DataService,
    private route: Router, private snackBar: MatSnackBar, private ref: ChangeDetectorRef) { }
  ngOnInit(): void {
    this.getcartBook()
    this.cartTotal()
  }

  getcartBook() {
    this.cartService.getCartBooks().subscribe((result: any) => {
      this.allCartBooks = result.result;
      this.cartitemNo=this.allCartBooks.length
      this.dataService.sendCartNo(this.cartitemNo);
      console.log(result);
      console.log("cart", this.allCartBooks);
      this.totalAmount=0;
      this.cartTotal();
    })
  }

  Home() {
    this.route.navigateByUrl("/home");
  }

  remove(ID: any) {
    this.id = this.allCartBooks[ID]._id;
    console.log(this.id);

    this.cartService.deleteCartItems(this.id).subscribe((result: any) => {
      console.log('deleted', result);
      this.snackBar.open('Removed from Cart !', 'ok', {
        duration: 2000
      });
      this.getcartBook()
    })
  }

  updateCartQty(Id: any, Qty: any) {
    let reqdata = {
      "quantityToBuy": Qty
    }
    this.cartService.updateCart(Id, reqdata).subscribe((result: any) => {
      console.log(result);
      this.getcartBook()
    })
  }


  cartTotal() {
    this.allCartBooks.forEach((element: any) => {
      this.totalAmount = (element.product_id.price * element.quantityToBuy) + this.totalAmount;
      //this.totalAmount+=parseInt(element.product_id.price)*parseInt(element.quantityToBuy);
    });
    console.log("total", this.totalAmount);
  }

  decrease(ID: any, bookQty: any) {
    bookQty--;
    this.bookCount = bookQty;
    console.log(this.bookCount);

    this.updateCartQty(ID, this.bookCount)
  }

  increase(ID: any, bookQty: any) {
    bookQty++;
    this.bookCount = bookQty;
    console.log(this.bookCount);
    this.updateCartQty(ID, this.bookCount)
  }

  placeOrder() {
    this.hide = !this.hide;
    this.step = 1;
    console.log(this.hide);
  }

  radioout1() {
    this.addressType = "Office";
  }
  radioout2() {
    this.addressType = "Home";
  }
}
