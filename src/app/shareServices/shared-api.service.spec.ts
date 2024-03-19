import { TestBed } from '@angular/core/testing';

import { SharedAPIService } from './shared-api.service';

describe('SharedAPIService', () => {
  let service: SharedAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
