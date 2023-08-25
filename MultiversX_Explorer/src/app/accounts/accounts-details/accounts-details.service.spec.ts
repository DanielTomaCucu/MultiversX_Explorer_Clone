import { TestBed } from '@angular/core/testing';

import { AccountsDetailsService } from './accounts-details.service';

describe('AccountsDetailsService', () => {
  let service: AccountsDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
