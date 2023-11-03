import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseASchoolSubjectComponent } from './choose-a-school-subject.component';

describe('ChooseASchoolSubjectComponent', () => {
  let component: ChooseASchoolSubjectComponent;
  let fixture: ComponentFixture<ChooseASchoolSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseASchoolSubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseASchoolSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
