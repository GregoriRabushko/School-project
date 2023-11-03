import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableRowWithStudentsComponent } from './table-row-with-students.component';

describe('TableRowWithStudentsComponent', () => {
  let component: TableRowWithStudentsComponent;
  let fixture: ComponentFixture<TableRowWithStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableRowWithStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableRowWithStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
