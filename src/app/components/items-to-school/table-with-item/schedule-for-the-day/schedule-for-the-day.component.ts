import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-schedule-for-the-day',
  templateUrl: './schedule-for-the-day.component.html',
  styleUrls: ['./schedule-for-the-day.component.scss']
})
export class ScheduleForTheDayComponent implements OnInit {

  @Input() day = '';
  numberClass:number = 1;
  indexToArrLetter:number = 0;
  arrToLettersClass:string[] = ['A', 'Б', 'В', 'Г']
  constructor() { }

  ngOnInit(): void {
  }
  // closeWindowWithAddSchoolClassList(item:boolean) {
  //   this.closeWindow.emit(item);
  // }

  saveSchedule() {

  }
  nextNumberClass() {
    ++this.numberClass;
    if(this.numberClass===13) {
      this.numberClass = 1;
    }
  }

  lastNumberClass() {
    --this.numberClass;
    if(this.numberClass===0) {
      this.numberClass = 12
    }
  }

  nextLetterClass() {
    ++this.indexToArrLetter;
    if(this.indexToArrLetter===4) {
      this.indexToArrLetter = 0;
    }
  }

  lastLetterClass() {
    --this.indexToArrLetter;
    if(this.indexToArrLetter===-1) {
      this.indexToArrLetter = 3;
    }
  }
}
