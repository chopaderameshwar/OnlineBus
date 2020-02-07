import { TestBed } from '@angular/core/testing';

import { RouteserviceService } from './routeservice.service';

describe('RouteserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RouteserviceService = TestBed.get(RouteserviceService);
    expect(service).toBeTruthy();
  });
});
