import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationResultGraphComponent } from './variation-result-graph.component';

describe('VariationResultGraphComponent', () => {
  let component: VariationResultGraphComponent;
  let fixture: ComponentFixture<VariationResultGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariationResultGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariationResultGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
