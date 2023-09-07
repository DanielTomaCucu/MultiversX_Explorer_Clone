import { TestBed } from '@angular/core/testing';

import { EsdtTokensService } from './esdt-tokens.service';

describe('EsdtTokensService', () => {
  let service: EsdtTokensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EsdtTokensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
