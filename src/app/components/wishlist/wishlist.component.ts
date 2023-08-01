import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/services/wishlistService/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  whishlistBooks:any=[];
  data:any=[];
  id: string='';
  constructor(private snackBar: MatSnackBar, private whishlist:WishlistService,private route: Router){}

  ngOnInit(): void {
    this.getWhishlistBooks();
  }

  Home(){
    this.route.navigateByUrl("/home");
  }

  getWhishlistBooks() {
    this.whishlist.getWhishlistBooks().subscribe((result: any) => {
      this.data = result.result;
      this.data=this.data.reverse();
      this.whishlistBooks=this.data.filter((x:any)=>x.product_id != null)
     // console.log(result);
      console.log("list",this.whishlistBooks);
    })
  }

  remove(ID:any) {
    this.id = this.whishlistBooks[ID].product_id?._id;
    //this.id = this.whishlistBooks[ID]._id;
   // console.log("Id",this.id);

    this.whishlist.deleteWhishlistItems(this.id).subscribe((result: any) => {
      console.log('deleted',result);
      this.snackBar.open('Removed from Whishlist !', 'ok', {
        duration: 2000
      });
      this.getWhishlistBooks();
    })
    
  }
}
