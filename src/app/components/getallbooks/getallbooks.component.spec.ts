import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetallbooksComponent } from './getallbooks.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortPipe } from 'src/app/pipes/Sortingpipe/sort.pipe';
import { SearchBookPipe } from 'src/app/pipes/search-book.pipe';
import { DisplayBooksComponent } from '../display-books/display-books.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';

describe('GetallbooksComponent', () => {
  let component: GetallbooksComponent;
  let fixture: ComponentFixture<GetallbooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule, NgxPaginationModule, MatTooltipModule, BrowserAnimationsModule,MatSnackBarModule],
      declarations: [ GetallbooksComponent, DisplayBooksComponent, SortPipe, SearchBookPipe]
    });
    fixture = TestBed.createComponent(GetallbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
