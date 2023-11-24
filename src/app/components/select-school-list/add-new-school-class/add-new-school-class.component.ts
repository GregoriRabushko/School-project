import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SelectSchoolListService} from "../select-school-list.service";
import {TableItemsService, ClassSchool} from 'src/app/components/items-to-school/table-with-item/table-items.service';

@Component({
  selector: 'app-add-new-school-class',
  templateUrl: './add-new-school-class.component.html',
  styleUrls: ['./add-new-school-class.component.scss']
})
export class AddNewSchoolClassComponent implements OnInit {

  numberClass:number = 1;
  indexToArrLetter:number = 0;
  arrToLettersClass:string[] = ['A', 'Б', 'В', 'Г']
  @Output() closeWindow = new EventEmitter<boolean>();
  newClass:ClassSchool = {
      id: '',
      schedule: {
        'Пн': [{room: '', nameLesson: ''}],
        'Вт': [{room: '', nameLesson: ''}],
        'Ср': [{room: '', nameLesson: ''}],
        'Чт': [{room: '', nameLesson: ''}],
        'Пт': [{room: '', nameLesson: ''}],
        'Сб': [{room: '', nameLesson: ''}]
      }
    }

  constructor(private tableItemsService:TableItemsService) { }

  ngOnInit(): void {
  }


  addNewClassList() {
    this.newClass.id = `${this.numberClass}`+this.arrToLettersClass[this.indexToArrLetter];
    // console.log(this.newClass);
    // console.log(this.newClass.id);
    this.tableItemsService.postStudentsListNumber(this.newClass);
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
