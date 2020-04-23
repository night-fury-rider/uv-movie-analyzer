import { TestBed } from '@angular/core/testing';

import { UvUtilService } from './uv-util.service';

describe('UvUtilService', () => {
  let service: UvUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UvUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
