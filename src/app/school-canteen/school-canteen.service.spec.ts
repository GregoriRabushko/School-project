import { TestBed } from '@angular/core/testing';

import { SchoolCanteenService } from './school-canteen.service';

describe('SchoolCanteenService', () => {
  let service: SchoolCanteenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolCanteenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
