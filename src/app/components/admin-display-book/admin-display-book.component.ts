import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/bookService/book.service';
import { DataService } from 'src/app/services/datashare/data.service';

@Component({
  selector: 'app-admin-display-book',
  templateUrl: './admin-display-book.component.html',
  styleUrls: ['./admin-display-book.component.scss']
})
export class AdminDisplayBookComponent {
 
  @Output() refreshpage = new EventEmitter();
  AllBooks: any=[];
  dataSource=[];

  displayedColumns: string[] = ['image', 'name', 'author', 'Price', 'discountPrice', 'Quantity', 'Actions'];

  Searchbookdetails: any;
  sortBooks: any;
  page:any
  lowValue: number = 0;
  highValue: number = 20;

  constructor(private route: Router, private dataService: DataService,private bookService:BookService,
    private snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit(): void {
  this.getbooks();
  }

  getbooks(){
    this.bookService.getAllBooksData().subscribe((res:any)=>
    {
      console.log(res.result);
     this.AllBooks=res.result;
    })
  }
  



}
