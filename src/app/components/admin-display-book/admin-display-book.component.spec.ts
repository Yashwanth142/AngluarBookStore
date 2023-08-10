import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayBookComponent } from './admin-display-book.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchBookPipe } from 'src/app/pipes/search-book.pipe';

describe('AdminDisplayBookComponent', () => {
  let component: AdminDisplayBookComponent;
  let fixture: ComponentFixture<AdminDisplayBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDisplayBookComponent, SearchBookPipe],
      imports : [HttpClientModule,MatDialogModule,MatTableModule, MatSnackBarModule,
         MatPaginatorModule, BrowserAnimationsModule,NgxPaginationModule]
    });
    fixture = TestBed.createComponent(AdminDisplayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
