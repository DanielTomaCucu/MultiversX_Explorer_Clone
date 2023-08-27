import { TestBed } from '@angular/core/testing';

import { NftDetailsService } from './nft-details.service';

describe('NftDetailsService', () => {
  let service: NftDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
