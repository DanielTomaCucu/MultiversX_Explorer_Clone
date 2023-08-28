import { TestBed } from '@angular/core/testing';

import { NftDetailsTableService } from './nft-details-table.service';

describe('NftDetailsTableService', () => {
  let service: NftDetailsTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftDetailsTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
