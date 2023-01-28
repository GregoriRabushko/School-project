import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseASubjectComponent } from './choose-a-subject.component';

describe('ChooseASubjectComponent', () => {
  let component: ChooseASubjectComponent;
  let fixture: ComponentFixture<ChooseASubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseASubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseASubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
