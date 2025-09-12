import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather-services';

describe('WeatherServices', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
