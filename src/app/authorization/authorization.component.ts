import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  btnComeIsActive = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  // loginUserSatisfies() {
  //   if(password||log) {
  //     this.clickBtnCome(true);
  //   }
  // }

  clickBtnCome(state:boolean) {
    this.btnComeIsActive.emit(state);
  }
}
