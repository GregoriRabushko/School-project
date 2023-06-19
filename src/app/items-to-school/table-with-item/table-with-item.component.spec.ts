import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithItemComponent } from './table-with-item.component';

describe('TableWithItemComponent', () => {
  let component: TableWithItemComponent;
  let fixture: ComponentFixture<TableWithItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWithItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
