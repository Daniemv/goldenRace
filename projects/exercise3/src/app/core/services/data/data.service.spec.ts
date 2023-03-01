import { TestBed } from '@angular/core/testing';
import { lastValueFrom, take } from 'rxjs';

import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When getNumbers is called', () => {
    it('should return a random number between 0 and 10', async () => {
      const randomNumber = await lastValueFrom(service.getNumbers().pipe(take(1)));
      expect(randomNumber).toBeGreaterThanOrEqual(0);
      expect(randomNumber).toBeLessThanOrEqual(10);
    });
  });
});

