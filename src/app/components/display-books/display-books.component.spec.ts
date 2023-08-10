import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBooksComponent } from './display-books.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortPipe } from 'src/app/pipes/Sortingpipe/sort.pipe';
import { SearchBookPipe } from 'src/app/pipes/search-book.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';

describe('DisplayBooksComponent', () => {
  let component: DisplayBooksComponent;
  let fixture: ComponentFixture<DisplayBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[MatCardModule,HttpClientModule,NgxPaginationModule,MatPaginatorModule,BrowserAnimationsModule,MatSnackBarModule],
      declarations: [ DisplayBooksComponent,SortPipe, SearchBookPipe ]
    });
    fixture = TestBed.createComponent(DisplayBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
