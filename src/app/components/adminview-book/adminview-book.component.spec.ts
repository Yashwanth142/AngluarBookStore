import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewBookComponent } from './adminview-book.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';

describe('AdminviewBookComponent', () => {
  let component: AdminviewBookComponent;
  let fixture: ComponentFixture<AdminviewBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminviewBookComponent],
      imports: [HttpClientModule, MatFormFieldModule, FormsModule, MatSnackBarModule, MatCardModule,
        ReactiveFormsModule, MatInputModule, BrowserAnimationsModule,MatIconModule],
        providers: [{ provide: MatDialogRef, useValue: {} }, { provide: MAT_DIALOG_DATA, useValue: [] }]
    });MatIconModule
    fixture = TestBed.createComponent(AdminviewBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
