import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersDetailsComponent } from './providers-details.component';

describe('ProvidersDetailsComponent', () => {
  let component: ProvidersDetailsComponent;
  let fixture: ComponentFixture<ProvidersDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvidersDetailsComponent]
    });
    fixture = TestBed.createComponent(ProvidersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
