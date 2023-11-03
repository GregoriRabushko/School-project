import { TestBed } from '@angular/core/testing';

import { FunctionalClassListService } from './functional-class-list.service';

describe('FunctionalClassListService', () => {
  let service: FunctionalClassListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionalClassListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
