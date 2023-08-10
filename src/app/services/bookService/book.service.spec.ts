import { TestBed } from '@angular/core/testing';

import { BookService } from './book.service';
import { HttpClientModule } from '@angular/common/http';

describe('BookService', () => {
  let service: BookService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports : [HttpClientModule]});
    service = TestBed.inject(BookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
