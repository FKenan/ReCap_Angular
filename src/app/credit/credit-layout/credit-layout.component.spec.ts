import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditLayoutComponent } from './credit-layout.component';

describe('CreditLayoutComponent', () => {
  let component: CreditLayoutComponent;
  let fixture: ComponentFixture<CreditLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
