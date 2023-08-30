import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxHashComponent } from './tx-hash.component';

describe('TxHashComponent', () => {
  let component: TxHashComponent;
  let fixture: ComponentFixture<TxHashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TxHashComponent]
    });
    fixture = TestBed.createComponent(TxHashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
