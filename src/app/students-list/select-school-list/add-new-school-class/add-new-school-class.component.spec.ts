import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewSchoolClassComponent } from './add-new-school-class.component';

describe('AddNewSchoolClassComponent', () => {
  let component: AddNewSchoolClassComponent;
  let fixture: ComponentFixture<AddNewSchoolClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewSchoolClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewSchoolClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
