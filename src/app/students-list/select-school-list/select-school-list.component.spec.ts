import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSchoolListComponent } from './select-school-list.component';

describe('SelectSchoolListComponent', () => {
  let component: SelectSchoolListComponent;
  let fixture: ComponentFixture<SelectSchoolListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectSchoolListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectSchoolListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
