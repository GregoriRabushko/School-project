import { Injectable } from '@angular/core';
import {ClassSchool, TableItemsService} from "src/app/components/items-to-school/table-with-item/table-items.service";

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {


  scheduleSchool = [
    {
      month: 'Январь',
      schedule: [
        {
          day: '1',
          grade: '',
          lessonTopic: '',
          homework: ''
        },
        {
          day: '2',
          grade: '',
          lessonTopic: '',
          homework: ''
        },
        {
          day: '3',
          grade: '',
          lessonTopic: '',
          homework: ''
        },
        {
          day: '4',
          grade: '',
          lessonTopic: '',
          homework: ''
        },
        {
          day: '5',
          grade: '',
          lessonTopic: '',
          homework: ''
        },
        {
          day: '6',
          grade: '',
          lessonTopic: '',
          homework: ''
        },
      ]
    },
  ];

  constructor(
    private readonly _tableItemsService:TableItemsService,
  ) { }

  weekSchedule:ClassSchool[] = this._tableItemsService.classesSchoolInfo;

  getScheduleWeek(classNameStudent:string) {
    let weekScheduleWithIdStudent:ClassSchool = {
      id: '',
      schedule: {
        'Пн': [{room: '', nameLesson: ''}],
        'Вт': [{room: '', nameLesson: ''}],
        'Ср': [{room: '', nameLesson: ''}],
        'Чт': [{room: '', nameLesson: ''}],
        'Пт': [{room: '', nameLesson: ''}],
        'Сб': [{room: '', nameLesson: ''}]
      }
    }
    this.weekSchedule.forEach(item => {
      if(item.id === classNameStudent) {
       weekScheduleWithIdStudent = item;
       console.log(weekScheduleWithIdStudent);
      } else {
        console.log(weekScheduleWithIdStudent);
        console.log(classNameStudent);
        console.log('Err: Данные не загрузились');
      }
    })
    return weekScheduleWithIdStudent;
  }

}
