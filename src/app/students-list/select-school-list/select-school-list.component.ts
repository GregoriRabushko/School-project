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
  constructor(private listService: FunctionalClassListService,private selectSchoolList:SelectSchoolListService) { }


  ngOnInit(): void {
    this.studentsListNumber = this.selectSchoolList.getStudentsListNumber();
    console.log(this.studentsListNumber);
    this.schoolObjects = this.selectSchoolList.getSchoolObjects();
    console.log(this.schoolObjects);
  }

  clickButtonSchoolListNumber() {
    this.buttonSchoolListNumber = true;
  }

  closeWindowWithSchoolObject() {
    this.buttonSchoolListNumber = false;
  }

  selectSchoolObject(item:string) {
    let indexObject;
    indexObject = this.schoolObjects.indexOf(item);
    console.log(indexObject);
  }
}
