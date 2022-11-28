import { TestBed } from '@angular/core/testing';

import { SimpleDateService } from './simple-date.service';

describe('SimpleDateService', () => {
  let service: SimpleDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
