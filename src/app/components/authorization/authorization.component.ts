import {Component, EventEmitter, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    "userEmail": new FormControl("zak_zan@bk.ru", [Validators.required, Validators.email]),
    "userPassword": new FormControl("", Validators.required)
  });

  isPasswordMismatch = false;
  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  ngOnInit(): void {
  }

  clickBtnCome() {
    this.router.navigate(['home']);

    // const body = this.myForm.value;
    //
    // this.http.post('http://localhost:3000/registration', body).subscribe(data => {
    //     if (data) {
    //       this.isPasswordMismatch = false;
    //       this.router.navigate(['selectList']);
    //     } else {
    //         this.isPasswordMismatch = true;
    //     }
    //   }
    // )
  }
}

interface UserInfo {
  who: string,
  name: string,
  password: string
}
