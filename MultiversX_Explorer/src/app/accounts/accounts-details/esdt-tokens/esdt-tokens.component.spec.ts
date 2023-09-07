import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsdtTokensComponent } from './esdt-tokens.component';

describe('EsdtTokensComponent', () => {
  let component: EsdtTokensComponent;
  let fixture: ComponentFixture<EsdtTokensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsdtTokensComponent]
    });
    fixture = TestBed.createComponent(EsdtTokensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
