import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftDetailsTabelComponent } from './nft-details-tabel.component';

describe('NftDetailsTabelComponent', () => {
  let component: NftDetailsTabelComponent;
  let fixture: ComponentFixture<NftDetailsTabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NftDetailsTabelComponent]
    });
    fixture = TestBed.createComponent(NftDetailsTabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
