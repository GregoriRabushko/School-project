import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleForTheDayComponent } from './schedule-for-the-day.component';

describe('ScheduleForTheDayComponent', () => {
  let component: ScheduleForTheDayComponent;
  let fixture: ComponentFixture<ScheduleForTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleForTheDayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleForTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
