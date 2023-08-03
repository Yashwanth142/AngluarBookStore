import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisplayBookComponent } from './admin-display-book.component';

describe('AdminDisplayBookComponent', () => {
  let component: AdminDisplayBookComponent;
  let fixture: ComponentFixture<AdminDisplayBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDisplayBookComponent]
    });
    fixture = TestBed.createComponent(AdminDisplayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
