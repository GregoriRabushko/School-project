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
  className = '';
  openWindowAddSchoolClassList = false;


  constructor(private listService: FunctionalClassListService,private selectSchoolListService:SelectSchoolListService) { }


  ngOnInit(): void {
    this.studentsListNumber = this.selectSchoolListService.getStudentsListNumber();
    console.log(this.studentsListNumber);

  }
    clickButtonSchoolListNumber() {
    this.closeOrVueChooseASchoolSubject = true;
  }
  closeWindowWithAddSchoolClassList() {
    this.openWindowAddSchoolClassList = false;
  }
  divVueAddSchoolClass() {
    this.openWindowAddSchoolClassList = true;
  }
  addNewClassList() {
    this.selectSchoolListService.postStudentsListNumber(this.className);
    this.openWindowAddSchoolClassList = false;
  }

  checkingTheStateOfAVariable(item:boolean) {
    this.closeOrVueChooseASchoolSubject = item;
  }
}
