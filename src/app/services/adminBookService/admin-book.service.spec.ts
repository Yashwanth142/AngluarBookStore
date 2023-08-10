import { TestBed } from '@angular/core/testing';

import { AdminBookService } from './admin-book.service';
import { HttpClientModule } from '@angular/common/http';

describe('AdminBookService', () => {
  let service: AdminBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule]
    });
    service = TestBed.inject(AdminBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
