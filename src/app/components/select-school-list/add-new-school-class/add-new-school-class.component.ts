import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SelectSchoolListService} from "../select-school-list.service";

@Component({
  selector: 'app-add-new-school-class',
  templateUrl: './add-new-school-class.component.html',
  styleUrls: ['./add-new-school-class.component.scss']
})
export class AddNewSchoolClassComponent implements OnInit {

  className = '';
  numberClass:number = 1;
  indexToArrLetter:number = 0;
  arrToLettersClass:string[] = ['A', 'Б', 'В', 'Г']
  @Output() closeWindow = new EventEmitter<boolean>();
  constructor(private selectSchoolListService:SelectSchoolListService) { }

  ngOnInit(): void {
  }


  addNewClassList() {
    this.className = `${this.numberClass}`+this.arrToLettersClass[this.indexToArrLetter];
    this.selectSchoolListService.postStudentsListNumber(this.className);
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
