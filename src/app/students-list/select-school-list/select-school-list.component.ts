import {Component, Input, OnInit} from '@angular/core';
import { FunctionalClassListService } from 'src/app/students-list/functional-class-list.service';
import { SelectSchoolListService } from 'src/app/students-list/select-school-list/select-school-list.service';
@Component({
  selector: 'app-select-school-list',
  templateUrl: './select-school-list.component.html',
  styleUrls: ['./select-school-list.component.scss'],
  providers: []
})
export class SelectSchoolListComponent implements OnInit {

  studentsListNumber:string[] = [];
  @Input() closeOrVueChooseASchoolSubject = false;
  @Input() openWindowAddSchoolClassList = false;
  deleteCard = false;
  contentButtonDelete = 'Удалить журнал -';


  constructor(private listService: FunctionalClassListService,private selectSchoolListService:SelectSchoolListService) { }


  ngOnInit(): void {
    this.studentsListNumber = this.selectSchoolListService.getStudentsListNumber();

    console.log(this.studentsListNumber);

  }
    clickButtonSchoolListNumber() {
    this.closeOrVueChooseASchoolSubject = true;
  }

  divVueAddSchoolClass() {
    this.openWindowAddSchoolClassList = true;
    this.deleteCard = false;
    this.contentButtonDelete = 'Удалить журнал -';

  }

  checkingTheStateOfAVariableClassList(item:boolean) {
    this.openWindowAddSchoolClassList = item;
  }
  checkingTheStateOfAVariableSubject(item:boolean) {
    this.closeOrVueChooseASchoolSubject = item;
  }

  changesTheContentOfTheButton() {
    this.deleteCard = !this.deleteCard;

    if(this.deleteCard) {
      this.contentButtonDelete = 'Отмена';
    }
    if(!this.deleteCard) {
      this.contentButtonDelete = 'Удалить журнал -';
    }
  }
  deleteSchoolClassList(indexItem:number) {
    this.studentsListNumber.splice(indexItem,1);
    console.log(this.studentsListNumber)
  }

}
