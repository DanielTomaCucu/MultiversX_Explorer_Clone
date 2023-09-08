import { TestBed } from '@angular/core/testing';

import { LastTransactionsService } from './last-transactions.service';

describe('LastTransactionsService', () => {
  let service: LastTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LastTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
