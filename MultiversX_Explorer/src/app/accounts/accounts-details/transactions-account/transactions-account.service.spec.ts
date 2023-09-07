import { TestBed } from '@angular/core/testing';

import { TransactionsAccountService } from './transactions-account.service';

describe('TransactionsAccountService', () => {
  let service: TransactionsAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionsAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
