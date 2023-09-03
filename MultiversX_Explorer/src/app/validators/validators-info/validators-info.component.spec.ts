import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorsInfoComponent } from './validators-info.component';

describe('ValidatorsInfoComponent', () => {
  let component: ValidatorsInfoComponent;
  let fixture: ComponentFixture<ValidatorsInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidatorsInfoComponent]
    });
    fixture = TestBed.createComponent(ValidatorsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
