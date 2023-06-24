import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassToScheduleComponent } from './add-class-to-schedule.component';

describe('AddClassToScheduleComponent', () => {
  let component: AddClassToScheduleComponent;
  let fixture: ComponentFixture<AddClassToScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClassToScheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddClassToScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
