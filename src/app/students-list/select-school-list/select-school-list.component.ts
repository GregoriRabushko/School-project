import { Component, OnInit } from '@angular/core';
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
  schoolObjects:string[] = [];
  buttonSchoolListNumber = false;
  addSchoolObjectOnSchoolList:string = '';
  className = '';
  divVueAddSchoolObject = false;
  openWindowAddSchoolClassList = false;


  constructor(private listService: FunctionalClassListService,private selectSchoolListService:SelectSchoolListService) { }


  ngOnInit(): void {
    this.studentsListNumber = this.selectSchoolListService.getStudentsListNumber();
    console.log(this.studentsListNumber);
    this.schoolObjects = this.selectSchoolListService.getSchoolObjects();
    console.log(this.schoolObjects);
  }



  clickButtonSchoolListNumber() {
    this.buttonSchoolListNumber = true;
  }

  closeWindowWithSchoolObject() {
    this.buttonSchoolListNumber = false;
  }

  closeWindowWithSchoolClassList() {
    this.openWindowAddSchoolClassList = false;
  }

  divVueAddSchoolClass() {
    this.openWindowAddSchoolClassList = true;
  }

  addNewSchoolObject() {
    this.divVueAddSchoolObject = true;
  }

  selectSchoolObject(item:string) {
    let indexObject;
    indexObject = this.schoolObjects.indexOf(item);
    console.log(indexObject);
  }

  buttonAddSchoolObject() {
    this.selectSchoolListService.postSchoolObjects(this.addSchoolObjectOnSchoolList);
    console.log(this.addSchoolObjectOnSchoolList);
  }

  addNewClassList() {
    this.selectSchoolListService.postStudentsListNumber(this.className);
  }
}
