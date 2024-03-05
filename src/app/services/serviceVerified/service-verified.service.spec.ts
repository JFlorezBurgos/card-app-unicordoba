import { TestBed } from '@angular/core/testing';

import { ServiceVerifiedService } from './service-verified.service';

describe('ServiceVerifiedService', () => {
  let service: ServiceVerifiedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceVerifiedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
