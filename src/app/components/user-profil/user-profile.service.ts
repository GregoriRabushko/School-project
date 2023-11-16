import {Injectable} from '@angular/core';

// import {ClassSchool, TableItemsService} from "src/app/components/items-to-school/table-with-item/table-items.service";

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {


  scheduleWeek: DairyWeek[] = [
    {
      dayWeek: 'Понедельник',
      dayMonth: '12',
      schedule: [
        {
          nameSubject: 'Математика',
          homework: '№3',
          grade: '7'
        },
        {
          nameSubject: 'Английский',
          homework: 'Выучить слова',
          grade: '6'
        },
        {
          nameSubject: 'Русский',
          homework: 'Написать сочинение',
          grade: ''
        },
        {
          nameSubject: 'Астрономия',
          homework: 'Подготовиться к КР',
          grade: ''
        },
        {
          nameSubject: 'Физика',
          homework: 'прочит. следю параграф ',
          grade: '8'
        },
        {
          nameSubject: 'ДПЮ',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'ЧЗС',
          homework: '',
          grade: ''
        },
      ]
    },
    {
      dayWeek: 'Вторник',
      dayMonth: '13',
      schedule: [
        {
          nameSubject: 'Математика',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Английский',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Русский',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Астрономия',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Физика',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'ДПЮ',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'ЧЗС',
          homework: '',
          grade: ''
        },
      ]
    },
    {
      dayWeek: 'Среда',
      dayMonth: '14',
      schedule: [
        {
          nameSubject: 'Математика',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Английский',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Русский',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Астрономия',
          homework: 'найти публикацию в библиотеке',
          grade: ''
        },
        {
          nameSubject: 'Физика',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'ДПЮ',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'ЧЗС',
          homework: '',
          grade: ''
        },
      ]
    },
    {
      dayWeek: 'Четверг',
      dayMonth: '15',
      schedule: [
        {
          nameSubject: 'Математика',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Английский',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Русский',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Астрономия',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Физика',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'ДПЮ',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'ЧЗС',
          homework: '',
          grade: ''
        },
      ]
    },
    {
      dayWeek: 'Пятница',
      dayMonth: '16',
      schedule: [
        {
          nameSubject: 'Математика',
          homework: 'з.3',
          grade: '7'
        },
        {
          nameSubject: 'Английский',
          homework: 'прочитать, перевести',
          grade: '9'
        },
        {
          nameSubject: 'Русский',
          homework: 'дописать',
          grade: ''
        },
        {
          nameSubject: 'Астрономия',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Физика',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'ДПЮ',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'ЧЗС',
          homework: '',
          grade: ''
        },
      ]
    },
    {
      dayWeek: 'Суббота',
      dayMonth: '17',
      schedule: [
        {
          nameSubject: 'Математика',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Английский',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Русский',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Астрономия',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'Физика',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'ДПЮ',
          homework: '',
          grade: ''
        },
        {
          nameSubject: 'ЧЗС',
          homework: '',
          grade: ''
        },
      ]
    },
  ];

  firstHalfOfTheWeek: DairyWeek[] = [];
  secondHalfOfTheWeek: DairyWeek[] = [];

  constructor(
    // private readonly _tableItemsService:TableItemsService,
  ) {
  }


  getScheduleWeek() {
    // todo перенести эту функцию  на сервер, ну или оставить ее здесь
    if (this.scheduleWeek.length > 0 && this.scheduleWeek.length === 6) {
      this.scheduleWeek.forEach((item, index) => {
        if (index < 3) {
          this.firstHalfOfTheWeek.push(item);
        } else {
          this.secondHalfOfTheWeek.push(item);
        }
      })
    } else {
      console.log('Error: Not found!!!');
    }
    return [this.firstHalfOfTheWeek, this.secondHalfOfTheWeek];
  }
}

export interface DairyWeek {
  dayWeek: string,
  dayMonth: string,
  schedule: {
    nameSubject: string,
    homework: string,
    grade: string
  }[]
}
