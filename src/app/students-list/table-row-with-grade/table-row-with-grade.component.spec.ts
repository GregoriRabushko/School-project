import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowWithGradeComponent } from './table-row-with-grade.component';

describe('TableRowWithGradeComponent', () => {
  let component: TableRowWithGradeComponent;
  let fixture: ComponentFixture<TableRowWithGradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowWithGradeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRowWithGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
