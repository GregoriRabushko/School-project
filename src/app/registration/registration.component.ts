import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  userInfo:UserInfo = {
    whoIsRegistration: '',
    name: '',
    surName: '',
    genericName: '',
    age: '',
    email: '',
    tel: '',
    password: '',
    repeatPassword: ''
  }

  constructor() { }

  ngOnInit(): void {
  }


  registrationUser() {
    //todo чтобы небыло пустых полей
    for(let key in this.userInfo) {

    }
    //todo пароль и повторный пароль должны совпадать
    if(this.userInfo.password === this.userInfo.repeatPassword) {

    }
    console.log(this.userInfo)
  }

}

export interface UserInfo {
  whoIsRegistration: '',
  name: '',
  surName: '',
  genericName: '',
  age: '',
  email: '',
  tel: '',
  password: '',
  repeatPassword: ''
}

