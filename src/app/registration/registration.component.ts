import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  whoIsRegistration:WhoIsWhoIsAuthorization = {
    'Director': false,
    'Teacher': false,
    'User': false,
    'otherWorker': false
  }

  constructor() { }

  ngOnInit(): void {
  }



  directorsAccount() {
    this.whoIsRegistration.Director = true;
    this.whoIsRegistration.Teacher = false;
    this.whoIsRegistration.User = false;
    this.whoIsRegistration.otherWorker = false;
    console.log(this.whoIsRegistration)
  }
  teacherAccount() {
    this.whoIsRegistration.Director = false;
    this.whoIsRegistration.Teacher = true;
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

export interface WhoIsWhoIsAuthorization {
  'Director': boolean,
  'Teacher': boolean,
  'User': boolean,
  'otherWorker': boolean
}
