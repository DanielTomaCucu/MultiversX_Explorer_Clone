import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNftsComponent } from './account-nfts.component';

describe('AccountNftsComponent', () => {
  let component: AccountNftsComponent;
  let fixture: ComponentFixture<AccountNftsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountNftsComponent]
    });
    fixture = TestBed.createComponent(AccountNftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
