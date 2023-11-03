import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    "userWhoIsRegistration": new FormControl("user", Validators.required),
    "userName": new FormControl("Gregori", Validators.required),
    "userSurName": new FormControl("Rabushko", Validators.required),
    "userGenericName": new FormControl("Nikolaevich", Validators.required),
    "userAge": new FormControl("21", Validators.required),
    "userEmail": new FormControl("zak_zan@bk.ru", [Validators.required, Validators.email]),
    "userTel": new FormControl("0295062633", Validators.pattern("[0-9]{10}")),
    "userPassword": new FormControl("", Validators.required),
    "userRepeatPassword": new FormControl("", Validators.required)
  });
  isPasswordMismatch = false;
  // private passwordValidator(control: FormControl) {
  //   const value = control.value;
  //   if(value !== this.myForm.value.userPassword) {
  //     return { invalidPassword: 'Пароль не прошел валидацию' };
  //   }
  //       return null;
  // }

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }


  registrationUser() {
    this.router.navigate(['selectList']);
  //   const body = this.myForm.value;
  //   if (this.myForm.value.userPassword === this.myForm.value.userRepeatPassword) {
  //     this.isPasswordMismatch = false;
  //     const registrationUser = this.http.post('http://localhost:3000/registration', body);
  //     console.log(body);
  //
  //     registrationUser.subscribe(data => {
  //       if (data) {
  //         this.router.navigate(['selectList']);
  //         //todo сверстать страничку приветсвия после успешной регистрации!!! или всплывающее окно!!!
  //         console.log(data)
  //       }
  //     })
  //   } else {
  //     this.isPasswordMismatch = true;
  //   }
  }
}
