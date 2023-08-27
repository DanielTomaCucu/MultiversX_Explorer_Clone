import { TestBed } from '@angular/core/testing';

import { NftsListService } from './nfts-list.service';

describe('NftsListService', () => {
  let service: NftsListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftsListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
