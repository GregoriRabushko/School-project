import {Component, OnInit} from '@angular/core';
import {FunctionalClassListService} from "../students-list/functional-class-list.service";
import {SelectSchoolListService} from "../select-school-list.service";
import {TableItemsService, ClassSchool} from 'src/app/components/items-to-school/table-with-item/table-items.service';
import {take} from "rxjs";

@Component({
  templateUrl: './home-select-list.component.html',
  styleUrls: ['./home-select-list.component.scss']
})
export class HomeSelectListComponent implements OnInit {

  closeOrVueChooseASchoolSubject = false;
  isWindowAddSchoolClassListOpened = false;
  deleteCard = false;
  contentButtonDelete = 'Удалить журнал -';
  indexClass: number = 0;

  classesSchoolInfo: ClassSchool[] | undefined;

  constructor(
    private listService: FunctionalClassListService,
    private selectSchoolListService: SelectSchoolListService,
    private tableItemsService: TableItemsService,
  ) {
  }

  ngOnInit(): void {
      // console.log(this.selectSchoolListService.getLessons());
      this.loadLessons();
      // console.log(this.classesSchoolInfo);
  }


  loadLessons() {
    this.selectSchoolListService.getLessons().pipe(
      take(1)
    ).subscribe((val: any) => this.classesSchoolInfo = val);
  }

  selectedClass(indexClass: number) {
    this.indexClass = indexClass;
    console.log(this.indexClass);
  }

  clickButtonSchoolListNumber() {
    this.closeOrVueChooseASchoolSubject = true;
  }

  divVueAddSchoolClass() {
    this.isWindowAddSchoolClassListOpened = true;
    this.deleteCard = false;
    this.contentButtonDelete = 'Удалить журнал -';

  }

  checkingTheStateOfAVariableClassList(result: {
    success: boolean,
    updatedData?: ClassSchool[],
  }) {
    this.isWindowAddSchoolClassListOpened = false;
    if (result.success) {
      this.classesSchoolInfo = result.updatedData;
    }
  }

  checkingTheStateOfAVariableSubject(item: boolean) {
    this.closeOrVueChooseASchoolSubject = item;
  }

  changesTheContentOfTheButton() {
    this.deleteCard = !this.deleteCard;

    if (this.deleteCard) {
      this.contentButtonDelete = 'Отмена';
    }
    if (!this.deleteCard) {
      this.contentButtonDelete = 'Удалить журнал -';
    }
  }

  deleteSchoolClassList(indexItem?: number) {
    // this.classesSchoolInfo.splice(indexItem, 1);
    // console.log(this.studentsListNumber)
  }

}
