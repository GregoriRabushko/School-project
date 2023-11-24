import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClassSchool, Lessons, TableItemsService} from "../table-items.service";
import {ScheduleEditService} from "./schedule-edit.service";

@Component({
  selector: 'app-schedule-edit',
  templateUrl: './schedule-edit.component.html',
  styleUrls: ['./schedule-edit.component.scss']
})
export class ScheduleEditComponent implements OnInit {

  @Output() onChanged = new EventEmitter<boolean>();
  @Input() classesId?:string;

  // делать GET апрос на сервер
  classesSchoolInfo:ClassSchool = {
    id: '',
    schedule: {
      'Пн': [{room: '18', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Английский'},],
      'Вт': [{room: '18', nameLesson: 'Русск.яз.'}, {room: '19', nameLesson: 'Математика'}, {room: '19', nameLesson: 'Математика'},],
      'Ср': [{room: '18', nameLesson: 'Бел.лит.'}, {room: '19', nameLesson: 'Астрономия'},],
      'Чт': [{room: '18', nameLesson: 'Английский'}, {room: '19', nameLesson: 'Физра'},],
      'Пт': [{room: '18', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'Труд.об.'}, {room: '19', nameLesson: 'ДПЮ'},],
      'Сб': []
    }
  };

  scheduleClassToCancel:ClassSchool = {
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

  week:string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  indexDay:number = 0;
  weekDay = 'Пн';

  idClass: string = '';
  scheduleDay: string = '';
  indexNameLesson:number = 0;
  isActiveBtnDeleteLesson = false;
  constructor(
    private readonly scheduleEditService: ScheduleEditService,
  ) { }

  ngOnInit(): void {

    this.scheduleEditService.getInfoSchoolSchedule();

    if(this.classesSchoolInfo.id !== '') {
      // this.scheduleClassToCancel = {...this.classesSchoolInfo};
      this.scheduleClassToCancel = JSON.parse(JSON.stringify(this.classesSchoolInfo));
    console.log(`scheduleClassToCancel:`);
    console.log(this.scheduleClassToCancel);
    }
      // if (this.classesId != null) {
      //   this.classesSchoolInfo.id = this.classesId;
      // }
    console.log(`classesSchoolInfo:`);
    console.log(this.classesSchoolInfo);
    console.log('onInit');
    console.log(this.classesId);
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
    this.isActiveBtnDeleteLesson = true;
    // this.idClass = this.classesSchoolInfo.id;
    // this.scheduleDay = weekDay;
    // this.indexNameLesson = indexLesson;
    this.classesSchoolInfo.schedule[weekDay].splice(indexLesson,1);

  }

  cancelEdit() {
    console.log(`scheduleClassToCancel:`);
    console.log(this.scheduleClassToCancel);
    if(this.isActiveBtnDeleteLesson) {
      // this.classesSchoolInfo = {...this.scheduleClassToCancel};
      this.classesSchoolInfo = JSON.parse(JSON.stringify(this.scheduleClassToCancel));
    } else {
      console.log('not result');
    }
    console.log(`classesSchoolInfo:`);
    console.log(this.classesSchoolInfo);
  }

  saveEditLesson() {
    // this.tableService.idClass = this.idClass;
    // this.tableService.scheduleDay = this.scheduleDay;
    // this.tableService.indexNameLesson = this.indexNameLesson;
    // this.tableService.deleteLessonSchedule();
  }
}
