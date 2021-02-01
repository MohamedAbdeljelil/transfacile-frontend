import { TestBed } from '@angular/core/testing';

import { FavoriteTripService } from './favorite-trip.service';

describe('FavoriteTripService', () => {
  let service: FavoriteTripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteTripService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
