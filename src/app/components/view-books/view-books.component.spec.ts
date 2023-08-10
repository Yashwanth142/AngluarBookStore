import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBooksComponent } from './view-books.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';

describe('ViewBooksComponent', () => {
  let component: ViewBooksComponent;
  let fixture: ComponentFixture<ViewBooksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBooksComponent],
      imports: [HttpClientModule, MatDividerModule, MatSnackBarModule, MatCardModule]
    });
    fixture = TestBed.createComponent(ViewBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
