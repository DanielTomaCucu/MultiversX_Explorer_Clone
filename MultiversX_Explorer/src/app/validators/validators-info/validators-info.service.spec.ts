import { TestBed } from '@angular/core/testing';

import { ValidatorsInfoService } from './validators-info.service';

describe('ValidatorsInfoService', () => {
  let service: ValidatorsInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidatorsInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
