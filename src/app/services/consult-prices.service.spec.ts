import { TestBed } from '@angular/core/testing';

import { ConsultPricesService } from './consult-prices.service';

describe('ConsultPricesService', () => {
  let service: ConsultPricesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultPricesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
