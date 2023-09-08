import { TestBed } from '@angular/core/testing';

import { AccountNftsService } from './account-nfts.service';

describe('AccountNftsService', () => {
  let service: AccountNftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountNftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
