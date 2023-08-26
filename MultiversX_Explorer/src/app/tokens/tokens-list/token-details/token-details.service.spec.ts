import { TestBed } from '@angular/core/testing';

import { TokenDetailsService } from './token-details.service';

describe('TokenDetailsService', () => {
  let service: TokenDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
