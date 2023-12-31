import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkInfoComponent } from './network-info.component';

describe('NetworkInfoComponent', () => {
  let component: NetworkInfoComponent;
  let fixture: ComponentFixture<NetworkInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetworkInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
