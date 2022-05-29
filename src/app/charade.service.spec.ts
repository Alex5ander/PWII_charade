import { TestBed } from '@angular/core/testing';

import { CharadeService } from './charade.service';

describe('CharadeService', () => {
  let service: CharadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
