import { TestBed, inject } from '@angular/core/testing';

import { InsightApiService } from './insight-api.service';

describe('InsightApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsightApiService]
    });
  });

  it('should be created', inject([InsightApiService], (service: InsightApiService) => {
    expect(service).toBeTruthy();
  }));
});
