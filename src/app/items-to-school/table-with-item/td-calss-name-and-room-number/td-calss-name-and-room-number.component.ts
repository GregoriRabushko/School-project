import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-td-calss-name-and-room-number',
  templateUrl: './td-calss-name-and-room-number.component.html',
  styleUrls: ['./td-calss-name-and-room-number.component.scss']
})
export class TdCalssNameAndRoomNumberComponent implements OnInit {

  @Input() classNum = '';
  constructor() { }

  ngOnInit(): void {
  }



}
