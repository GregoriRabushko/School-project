import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { SelectSchoolListService } from 'src/app/students-list/select-school-list/select-school-list.service';

@Component({
  selector: 'app-choose-a-school-subject',
  templateUrl: './choose-a-school-subject.component.html',
  styleUrls: ['./choose-a-school-subject.component.scss']
})
export class ChooseASchoolSubjectComponent implements OnInit {

  @Output() closeOrVueChooseASchoolSubject = new EventEmitter<boolean>();
  schoolObjects:string[] = [];
  addSchoolObjectOnSchoolList:string = '';
  divVueAddSchoolObject = false;


  constructor(private selectSchoolListService:SelectSchoolListService) {}


  ngOnInit(): void {
    this.schoolObjects = this.selectSchoolListService.getSchoolObjects();
    console.log(this.schoolObjects);
  }

  selectSchoolObject(item:string) {
    let indexObject;
    indexObject = this.schoolObjects.indexOf(item);
    console.log(indexObject);
  }
  addNewSchoolObject() {
    this.divVueAddSchoolObject = true;
  }
  buttonAddSchoolObject() {
    this.selectSchoolListService.postSchoolObjects(this.addSchoolObjectOnSchoolList);
    console.log(this.addSchoolObjectOnSchoolList);
  }
  closeWindowWithSelectSchoolObject(item:boolean) {
    this.closeOrVueChooseASchoolSubject.emit(item);
  }
  closeWindowWithAddSchoolObject() {
    this.divVueAddSchoolObject = false;
  }

}
