import { TestBed, inject } from '@angular/core/testing';

import { PricesearcherService } from './pricesearcher.service';

describe('PricesearcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PricesearcherService]
    });
  });

  it('should be created', inject([PricesearcherService], (service: PricesearcherService) => {
    expect(service).toBeTruthy();
  }));
});
