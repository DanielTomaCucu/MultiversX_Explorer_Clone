import { TestBed } from '@angular/core/testing';

import { TokensListService } from './tokens-list.service';

describe('TokensListService', () => {
  let service: TokensListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokensListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
