import { TestBed } from '@angular/core/testing';

import { ListAplicationService } from './list-aplication.service';

describe('ListAplicationService', () => {
  let service: ListAplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListAplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
