import { Component } from '@angular/core';
import { BookService } from 'src/app/services/bookService/book.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent {
  getAllBooks=[]

  constructor(private bookService:BookService){}

  ngOnInit(): void {
    this.getbooks()
  }

  getbooks(){
    this.bookService.getAllBooksData().subscribe((res:any)=>
    {
      //console.log("get all Books",res.result);
     this.getAllBooks=res.result;
    })
  }

  getRefeshevent(){
    console.log("refresh");
    this.getbooks()
  }
}
