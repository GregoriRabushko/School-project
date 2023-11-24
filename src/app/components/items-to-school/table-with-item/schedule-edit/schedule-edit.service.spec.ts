import { TestBed } from '@angular/core/testing';

import { ScheduleEditService } from './schedule-edit.service';

describe('ScheduleEditService', () => {
  let service: ScheduleEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
