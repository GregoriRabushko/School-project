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

  diary = [
    {
      dayWeek: 'Понедельник',
      dayMonth: '12',
      schedule: ['Математика', 'Английский', 'Русский', 'Астрономия', 'Физика', 'ДПЮ', 'ЧЗС',]
    },
    {
      dayWeek: 'Вторник',
      dayMonth: '13',
      schedule: ['Астрономия', 'Физика', 'Русский', 'Астрономия', 'Физика', 'ДПЮ', 'Английский',]
    },
    {
      dayWeek: 'Среда',
      dayMonth: '14',
      schedule: ['Математика', 'Английский', 'Русский', 'Астрономия', 'Физика', 'ДПЮ', 'ЧЗС',]
    },
    {
      dayWeek: 'Четверг',
      dayMonth: '15',
      schedule: ['Математика', 'Английский', 'Русский', 'Астрономия', 'Физика', 'ДПЮ', 'ЧЗС',]
    },
    {
      dayWeek: 'Пятница',
      dayMonth: '16',
      schedule: ['Математика', 'Английский', 'Русский', 'Астрономия', 'Физика', 'ДПЮ', 'ЧЗС',]
    },
    {
      dayWeek: 'Суббота',
      dayMonth: '17',
      schedule: ['Практика']
    }
  ]

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
