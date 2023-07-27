import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-books',
  templateUrl: './display-books.component.html',
  styleUrls: ['./display-books.component.scss']
})
export class DisplayBooksComponent {
  @Input() AllBooks: any=[];
  @Output() refresh = new EventEmitter();

  displayBooks:any=[]

  page:any
  lowValue: number = 0;
  highValue: number = 20;

  constructor(private route: Router) { }

  ngOnInit(): void {
  
  }

  getPaginatorData(event: PageEvent): PageEvent {
    console.log("page");
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }


}
