import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HeaderInfo} from "../header-c/header-c.component";
import {UserProfileService} from "./user-profile.service";
import {ClassSchool} from "../items-to-school/table-with-item/table-items.service";

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss']
})
export class UserProfilComponent implements OnInit {

  infoToHeader: HeaderInfo = {
    imag: 'url("/assets/img/img-header-slider/profile.jpg")',
    textP: 'Профиль'
  };
  monthName = 'Январь';
  classNameStudent = '9A';
  week: string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  // weekDay:string[] = ['12','13','14','15','16','17'];
  weekSchedule: ClassSchool = {
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

  firstHalfOfTheWeek = [
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
    }];

  secondHalfOfTheWeek = [
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

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private userService: UserProfileService,
  ) {
  }

  ngOnInit() {
    this.weekSchedule = this.userService.getScheduleWeek(this.classNameStudent)
  }

}
