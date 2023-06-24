import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-class-to-schedule',
  templateUrl: './add-class-to-schedule.component.html',
  styleUrls: ['./add-class-to-schedule.component.scss']
})
export class AddClassToScheduleComponent implements OnInit {


  @Output() className = '';
  numberClass:number = 1;
  indexToArrLetter:number = 0;
  arrToLettersClass:string[] = ['A', 'Б', 'В', 'Г']
  @Output() closeWindow = new EventEmitter<boolean>();  constructor() { }

  ngOnInit(): void {
  }

  addNewClassList() {
    this.className = `${this.numberClass}`+this.arrToLettersClass[this.indexToArrLetter];
    this.closeWindowWithAddSchoolClassList(false);
  }
  closeWindowWithAddSchoolClassList(item:boolean) {
    this.closeWindow.emit(item);
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
