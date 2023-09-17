import { TestBed } from '@angular/core/testing';

import { SellerHomeResolver } from './seller-home.resolver';

describe('SellerHomeResolver', () => {
  let resolver: SellerHomeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(SellerHomeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
