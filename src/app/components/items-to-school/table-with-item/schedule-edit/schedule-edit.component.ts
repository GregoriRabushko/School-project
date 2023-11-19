import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClassSchool} from "../table-items.service";

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.scss']
})
export class ScheduleEditComponent implements OnInit {

  @Output() onChanged = new EventEmitter<boolean>();
  @Input() classesSchoolInfo:ClassSchool = {
    id: '',
    schedule: {
      'Пн': [{room: '', nameLesson: ''}],
      'Вт': [{room: '', nameLesson: ''}],
      'Ср': [{room: '', nameLesson: ''}],
      'Чт': [{room: '', nameLesson: ''}],
      'Пт': [{room: '', nameLesson: ''}],
      'Сб': [{room: '', nameLesson: ''}]
    }
  };
  week:string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  indexDay:number = 0;
  weekDay = 'Пн';
  constructor() { }

  ngOnInit(): void {
  }

  change(increased:boolean) {
    this.onChanged.emit(increased);
  }

  lastDay() {
    this.indexDay --;
    if(this.indexDay < 0) {
      this.indexDay = 0;
    }
    this.weekDay = this.week[this.indexDay];
  }
  nextDay() {
    this.indexDay ++;
    if(this.indexDay >5) {
      this.indexDay = 0;
    }
    this.weekDay = this.week[this.indexDay];
  }
}
