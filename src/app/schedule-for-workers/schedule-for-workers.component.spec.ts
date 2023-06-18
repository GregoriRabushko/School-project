import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleForWorkersComponent } from './schedule-for-workers.component';

describe('ScheduleForWorkersComponent', () => {
  let component: ScheduleForWorkersComponent;
  let fixture: ComponentFixture<ScheduleForWorkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleForWorkersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleForWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
