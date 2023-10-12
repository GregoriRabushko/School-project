import { TestBed } from '@angular/core/testing';

import { TableItemsService } from './table-items.service';

describe('TableItemsService', () => {
  let service: TableItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
