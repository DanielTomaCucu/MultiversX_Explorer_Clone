import { TestBed } from '@angular/core/testing';

import { NftInfoService } from './nft-info.service';

describe('NftInfoService', () => {
  let service: NftInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NftInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
