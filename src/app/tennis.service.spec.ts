import { TestBed, inject } from '@angular/core/testing';

import { TennisService } from './tennis.service';

describe('TennisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TennisService]
    });
  });

  it('should ...', inject([TennisService], (service: TennisService) => {
    expect(service).toBeTruthy();
  }));
});
