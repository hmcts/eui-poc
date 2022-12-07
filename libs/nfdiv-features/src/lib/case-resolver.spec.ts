import { TestBed } from '@angular/core/testing';

import { CaseResolver } from './case-resolver.service';

describe('CaseResolver', () => {
  let resolver: CaseResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CaseResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
