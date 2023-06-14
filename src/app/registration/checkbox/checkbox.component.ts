import {Component, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  whoIsRegistration:WhoIsWhoIsAuthorization = {
    'Director': false,
    'Teacher': false,
    'User': false,
    'otherWorker': false
  }
  //TODO event emit => @Output() whoIsRegistrationToUser:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  directorsAccount(state: Event) {
    const checked = !!(state.target as HTMLInputElement)?.checked;
    this.whoIsRegistration.Director = checked;
    // this.whoIsRegistrationToUser = 'Директор';

    this.whoIsRegistration.Teacher = !checked;
    this.whoIsRegistration.User = !checked;
    this.whoIsRegistration.otherWorker = !checked;
  }
  teacherAccount(state: Event) {
    const checked = !!(state.target as HTMLInputElement)?.checked;
    this.whoIsRegistration.Teacher = checked;
    // this.whoIsRegistrationToUser = 'Учитель';


    this.whoIsRegistration.Director = !checked;
    this.whoIsRegistration.User = !checked;
    this.whoIsRegistration.otherWorker = !checked;
  }
  userAccount(state: Event) {
    const checked = !!(state.target as HTMLInputElement)?.checked;
    this.whoIsRegistration.User = checked;
    // this.whoIsRegistrationToUser = 'Пользователь';


    this.whoIsRegistration.Director = !checked;
    this.whoIsRegistration.Teacher = !checked;
    this.whoIsRegistration.otherWorker = !checked;
  }
  otherWorkerAccount(state: Event) {
    const checked = !!(state.target as HTMLInputElement)?.checked;
    this.whoIsRegistration.otherWorker = checked;
    // this.whoIsRegistrationToUser = 'Иной работник';


    this.whoIsRegistration.Director = !checked;
    this.whoIsRegistration.Teacher = !checked;
    this.whoIsRegistration.User = !checked;
  }

}

export interface WhoIsWhoIsAuthorization {
  'Director': boolean,
  'Teacher': boolean,
  'User': boolean,
  'otherWorker': boolean
}
