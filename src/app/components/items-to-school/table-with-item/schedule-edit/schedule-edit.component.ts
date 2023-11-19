import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClassSchool, Lessons, TableItemsService} from "../table-items.service";

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
      'Пн': [],
      'Вт': [],
      'Ср': [],
      'Чт': [],
      'Пт': [],
      'Сб': []
    }
  };

  scheduleClass = {}

  week:string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  indexDay:number = 0;
  weekDay = 'Пн';

  idClass: string = '';
  scheduleDay: string = '';
  indexNameLesson:number = 0;
  constructor(
    private readonly tableService: TableItemsService,
  ) { }

  ngOnInit(): void {
    if(this.classesSchoolInfo.id !== '') {
      this.scheduleClass = {...this.classesSchoolInfo};
    }
    console.log(this.scheduleClass);
  }

  exitThisWindow(increased:boolean) {
    this.onChanged.emit(increased);
  }

  lastDay() {
    this.indexDay --;
    if(this.indexDay < 0) {
      this.indexDay = 5;
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

  deleteLesson(indexLesson:number, weekDay:string) {
    this.idClass = this.classesSchoolInfo.id;
    this.scheduleDay = weekDay;
    this.indexNameLesson = indexLesson;
  }

  saveEditLesson() {
    this.tableService.idClass = this.idClass;
    this.tableService.scheduleDay = this.scheduleDay;
    this.tableService.indexNameLesson = this.indexNameLesson;
    this.tableService.deleteLessonSchedule();
  }
}
