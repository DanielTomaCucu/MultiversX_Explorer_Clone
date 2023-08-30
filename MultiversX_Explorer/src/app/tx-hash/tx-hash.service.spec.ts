import { TestBed } from '@angular/core/testing';

import { TxHashService } from './tx-hash.service';

describe('TxHashService', () => {
  let service: TxHashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TxHashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
