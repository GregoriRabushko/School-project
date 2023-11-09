import {Component, Input, OnInit} from '@angular/core';
import {FunctionalClassListService} from "../students-list/functional-class-list.service";
import {SelectSchoolListService} from "../select-school-list.service";
import {TableItemsService, ClassSchool} from 'src/app/components/items-to-school/table-with-item/table-items.service';

@Component({
  selector: 'app-home-select-list',
  templateUrl: './home-select-list.component.html',
  styleUrls: ['./home-select-list.component.scss']
})
export class HomeSelectListComponent implements OnInit {

  // studentsListNumber:string[] = [];
  @Input() closeOrVueChooseASchoolSubject = false;
  @Input() openWindowAddSchoolClassList = false;
  deleteCard = false;
  contentButtonDelete = 'Удалить журнал -';


  classesSchoolInfo:ClassSchool[] = [];


  constructor(
    private listService: FunctionalClassListService,
    private selectSchoolListService:SelectSchoolListService,
    private tableItemsService: TableItemsService,
  ) { }


  ngOnInit(): void {
    this.classesSchoolInfo = this.tableItemsService.getLessons();

    console.log(this.classesSchoolInfo);

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
    this.classesSchoolInfo.splice(indexItem,1);
    // console.log(this.studentsListNumber)
  }

}
