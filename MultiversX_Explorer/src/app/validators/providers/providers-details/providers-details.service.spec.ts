import { TestBed } from '@angular/core/testing';

import { ProvidersDetailsService } from './providers-details.service';

describe('ProvidersDetailsService', () => {
  let service: ProvidersDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvidersDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
