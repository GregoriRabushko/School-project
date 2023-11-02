import {Component, EventEmitter, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  userInfo: UserInfo = {
    who: '',
    name: '',
    password: ''
  }

  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  ngOnInit(): void {
  }

  clickBtnCome() {
    this.router.navigate(['selectList']);
    //  раскоментировать как будет готов сервер и БД
    // this.http.post('http://localhost:3000/registration', this.userInfo).subscribe(data => {
    //     if (data) {
    //       this.router.navigate(['selectList']);
    //     } else {
    //
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
