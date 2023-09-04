import { TestBed } from '@angular/core/testing';

import { NodesInfoService } from './nodes-info.service';

describe('NodesInfoService', () => {
  let service: NodesInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NodesInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
