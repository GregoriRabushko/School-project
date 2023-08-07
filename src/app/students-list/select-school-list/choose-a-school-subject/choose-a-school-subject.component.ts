import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { SelectSchoolListService } from 'src/app/students-list/select-school-list/select-school-list.service';
import {take} from "rxjs";
import {User} from "src/app/students-list/select-school-list/interface";

import {Router} from "@angular/router";

@Component({
  selector: 'app-choose-a-school-subject',
  templateUrl: './choose-a-school-subject.component.html',
  styleUrls: ['./choose-a-school-subject.component.scss']
})
export class ChooseASchoolSubjectComponent implements OnInit {

  @Output() closeOrVueChooseASchoolSubject = new EventEmitter<boolean>();
  schoolSubjects:string[] = [];

  addSchoolObjectOnSchoolList:string = '';
  isAddNewSubjectModeActive = false;
  isChooseSubjectModeActive = true;
  deleteButtonSchoolObject = true;
  isDeleteButtonActive = false;
  contentToggleStateButton = 'Удалить предмет';
  clickOnButtonSelectObject = false;
  isViewSubjectActive = true;

  users: User[]=[];
  subjects: User[]=[];
  constructor(
    private selectSchoolListService:SelectSchoolListService,
    private readonly router: Router,
    ) {}


  ngOnInit(): void {
    this._loadSubjects();
  }

  viewSchoolObject(index: number) {
    this.router.navigate(['studentList', index, index]); // TODO classId
  }

  deleteObject(item: string, index: number) {
    this.selectSchoolListService.deleteSchoolObjects(index);
    this._loadSubjects()
  }

  addNewSchoolObject() {
    this.isAddNewSubjectModeActive = true;
    this.isChooseSubjectModeActive = false;
  }
  toggleState() {
    this.deleteButtonSchoolObject = !this.deleteButtonSchoolObject;

    if(this.deleteButtonSchoolObject) {
      this.isDeleteButtonActive = false;
      this.contentToggleStateButton = 'Удалить предмет';
    }
    if(!this.deleteButtonSchoolObject) {
      this.isDeleteButtonActive = true;
      this.contentToggleStateButton = 'Выйти из режима удаления';
    }
    console.log(this.isDeleteButtonActive)
  }
  buttonAddSchoolObject() {
    if(this.addSchoolObjectOnSchoolList) {
      this.selectSchoolListService.postSchoolObjects(this.addSchoolObjectOnSchoolList);
      this.addSchoolObjectOnSchoolList = '';
    }
    this.isAddNewSubjectModeActive = false;
    this.isChooseSubjectModeActive = true;
  }
  closeWindowWithSelectSchoolObject(item:boolean) {
    this.closeOrVueChooseASchoolSubject.emit(item);
  }
  closeWindowWithAddSchoolObject() {
    this.isAddNewSubjectModeActive = false;
    this.isChooseSubjectModeActive = true;
  }

  private _loadSubjects() {
    // if(this.schoolSubjects === []) {
      // this.selectSchoolListService.getSchoolSubjects().subscribe({next:(data:User[]) => this.subjects=data});
    // }
    // else {
    //   return console.log(this.schoolSubjects);
    // }
    this.schoolSubjects = this.selectSchoolListService.getSchoolSubjects()
    // this.selectSchoolListService.getSchoolSubjects().pipe(take(1)).subscribe(result => {
    //   this.schoolSubjects = result;
    //   console.log(this.schoolSubjects);
    // });
  }


  //========================================== просто пробовал через observer ===========
  giveInfo() {
    this.selectSchoolListService.getInfo().subscribe({next:(data: User[]) => this.users=data});
    return console.log(this.users);
  }
}
