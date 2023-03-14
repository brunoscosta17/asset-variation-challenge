import { TestBed } from '@angular/core/testing';

import { StockPriceServiceService } from './stock-price-service.service';

describe('StockPriceServiceService', () => {
  let service: StockPriceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockPriceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
