import { Component, OnInit } from '@angular/core';
import { WhoIsWhoIsAuthorization } from 'src/app/registration/registration.component';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  whoIsRegistration:WhoIsWhoIsAuthorization = {
    'Director': false,
    'Teacher': false,
    'User': false,
    'otherWorker': false
  }

  constructor() { }

  ngOnInit(): void {
  }

  directorsAccount(state: Event) {
    const checked = !!(state.target as HTMLInputElement)?.checked;
    this.whoIsRegistration.Director = checked;

    this.whoIsRegistration.Teacher = !checked;
    this.whoIsRegistration.User = !checked;
    this.whoIsRegistration.otherWorker = !checked;
  }
  teacherAccount() {
    this.whoIsRegistration.Teacher = true;

    this.whoIsRegistration.Director = false;
    this.whoIsRegistration.User = false;
    this.whoIsRegistration.otherWorker = false;
    console.log(this.whoIsRegistration)
  }
  UserAccount() {
    this.whoIsRegistration.Director = false;
    this.whoIsRegistration.Teacher = false;
    this.whoIsRegistration.User = true;
    this.whoIsRegistration.otherWorker = false;
    console.log(this.whoIsRegistration)
  }
  otherWorkerAccount() {
    this.whoIsRegistration.Director = false;
    this.whoIsRegistration.Teacher = false;
    this.whoIsRegistration.User = false;
    this.whoIsRegistration.otherWorker = true;
    console.log(this.whoIsRegistration)
  }

}
