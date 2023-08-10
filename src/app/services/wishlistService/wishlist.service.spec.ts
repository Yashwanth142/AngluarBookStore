import { TestBed } from '@angular/core/testing';

import { WishlistService } from './wishlist.service';
import { HttpClientModule } from '@angular/common/http';

describe('WishlistService', () => {
  let service: WishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports : [HttpClientModule]});
    service = TestBed.inject(WishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
