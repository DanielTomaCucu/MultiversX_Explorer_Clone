import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftsListComponent } from './nfts-list.component';

describe('NftsListComponent', () => {
  let component: NftsListComponent;
  let fixture: ComponentFixture<NftsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftsListComponent]
    });
    fixture = TestBed.createComponent(NftsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
