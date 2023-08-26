import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TokensListComponent } from './tokens-list.component';

describe('TokensListComponent', () => {
  let component: TokensListComponent;
  let fixture: ComponentFixture<TokensListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TokensListComponent]
    });
    fixture = TestBed.createComponent(TokensListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
