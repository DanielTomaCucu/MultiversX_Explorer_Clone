import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsAccountComponent } from './transactions-account.component';

describe('TransactionsAccountComponent', () => {
  let component: TransactionsAccountComponent;
  let fixture: ComponentFixture<TransactionsAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionsAccountComponent]
    });
    fixture = TestBed.createComponent(TransactionsAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
