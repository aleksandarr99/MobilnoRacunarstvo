import { TestBed } from '@angular/core/testing';

import { CarDetailsResolverResolver } from './car-details-resolver.resolver';

describe('CarDetailsResolverResolver', () => {
  let resolver: CarDetailsResolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CarDetailsResolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
