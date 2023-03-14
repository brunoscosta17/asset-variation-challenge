import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultPricesComponent } from './consult-prices.component';

describe('ConsultPricesComponent', () => {
  let component: ConsultPricesComponent;
  let fixture: ComponentFixture<ConsultPricesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultPricesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
