import { TestBed } from '@angular/core/testing';

import { LatestBlocksService } from './latest-blocks.service';

describe('LatestBlocksService', () => {
  let service: LatestBlocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LatestBlocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
