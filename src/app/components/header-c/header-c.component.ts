import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-c',
  templateUrl: './header-c.component.html',
  styleUrls: ['./header-c.component.scss']
})
export class HeaderCComponent implements OnInit {
  @Input() info: HeaderInfo = {
    imag: '',
    textP: ''
  }

  constructor() {
  }

  ngOnInit(): void {

  }
}

export interface HeaderInfo {
  imag: string
  textP: string

}
