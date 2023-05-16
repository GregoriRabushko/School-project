import { TestBed } from '@angular/core/testing';

import { SelectSchoolListService } from './select-school-list.service';

describe('SelectSchoolListService', () => {
  let service: SelectSchoolListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectSchoolListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
