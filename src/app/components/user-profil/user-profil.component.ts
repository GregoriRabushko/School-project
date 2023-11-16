import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HeaderInfo} from "../header-c/header-c.component";
import {DairyWeek, UserProfileService} from "./user-profile.service";
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
  firstHalfOfTheWeek: DairyWeek[] = [];
  secondHalfOfTheWeek: DairyWeek[] = [];
  userInfo = {
    name: 'Tot Georgi Afanaciyvich ',
    age: '15',
    birthday: '12.05.2007',
    className: '9A',
    tel: '+375(29)777-77-77',
    email: 'tot@mail.ru',
    img: 'assets/img/user-profile/images-to-ava.png'
  };

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private userService: UserProfileService,
  ) {
  }

  ngOnInit() {
    this.userService.getScheduleWeek();
    this.firstHalfOfTheWeek = this.userService.firstHalfOfTheWeek;
    this.secondHalfOfTheWeek = this.userService.secondHalfOfTheWeek;
  }

}
