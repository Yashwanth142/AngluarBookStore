import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookService/book.service';
import { DataService } from 'src/app/services/datashare/data.service';
import { AdminviewBookComponent } from '../adminview-book/adminview-book.component';
import { AdminBookService } from 'src/app/services/adminBookService/admin-book.service';

@Component({
  selector: 'app-admin-display-book',
  templateUrl: './admin-display-book.component.html',
  styleUrls: ['./admin-display-book.component.scss']
})
export class AdminDisplayBookComponent {
  AllBooks: any=[];
  dataSource=[];

  displayedColumns: string[] = ['image', 'name', 'author', 'Price', 'discountPrice', 'Quantity', 'Actions'];

  Searchbookdetails: any;
  sortBooks: any;
  page:any
  lowValue: number = 0;
  highValue: number = 20;

  constructor(private route: Router,private bookService:BookService, private dataService: DataService, private adminBookService: AdminBookService,
    private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.bookSearch();
    this.getbooks();
  }

  bookSearch() {
    console.log("search book");
    this.dataService.currentSearchMessage.subscribe((response) => {
      //console.log(response);   
      this.Searchbookdetails = response;
      console.log("Search",this.Searchbookdetails);

    })
  }
  
  remove(id: any) {
    this.adminBookService.deleteBook(id).subscribe((result: any) => {
      console.log(result);
      this.snackBar.open('Book Removed !', 'ok', {
        duration: 4000
      });
      this.getbooks();
    })
  }

  openDialog(element?: any): void {
    const dialogRef = this.dialog.open(AdminviewBookComponent, {
      data: element,
    });
    console.log("data", element);
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.getbooks();
      }
    });
  }

  getbooks(){
    this.bookService.getAllBooksData().subscribe((res:any)=>
    {
      console.log(res.result);
     this.AllBooks=res.result;
     this.AllBooks.reverse();
    })
  }

}
