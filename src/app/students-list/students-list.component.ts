import { Component, OnInit, Input } from '@angular/core';
import { FunctionalClassListService } from "./functional-class-list.service";
import { MoreData } from "./functional-class-list.service";
import {ClassInfo, SelectSchoolListService} from 'src/app/students-list/select-school-list/select-school-list.service';
import { HttpClient} from '@angular/common/http';
import { Observable} from "rxjs";
import { map } from "rxjs/operators";
import {ActivatedRoute, Route} from "@angular/router";



@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
})




export class StudentsListComponent implements OnInit {
  classInfo: ClassInfo = {
    chooseSubject:'',
    className:''
  };
  @Input() nameObject:string = '';

  countNumberStudent = 0;
  students: string[] = [];
  studentsName:string = '';
  monthToList:string[] = ['Январь', 'Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь',];
  month = this.monthToList[0];
  item = 0


  users:MoreData[] = []


  constructor(
    private listService: FunctionalClassListService,
    private selectSchoolListService:SelectSchoolListService,
    private readonly activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const classIndex = this.activatedRoute.snapshot.paramMap.get('classIndex');
    const subjectIndex = this.activatedRoute.snapshot.paramMap.get('subjectIndex');
    if (subjectIndex && classIndex) {
      this.classInfo = this.selectSchoolListService.getClassInfo(+classIndex, +subjectIndex);
    }
  }
  addStudentToList() {
    this.countNumberStudent += this.countNumberStudent;
    this.students.push(this.studentsName);
    this.studentsName = '';
  }

  deleteStudent(indexStudent:number) {
    this.students.splice(indexStudent,1)
    console.log(this.students);
  }
  // saveListButton () {
  //   this.listService.addData(this.className);
  // }
  className?: ClassInfo;
  playObserver () {
    this.listService.getRes().subscribe(val => this.users = val);
    console.log(this.users)
  }


  nextMonth() {
    ++this.item ;
    if(this.item>11) {
      this.item = 0;
    }
    this.month = this.monthToList[this.item];


  }

  previousMonth() {
    --this.item ;
    if(this.item < 0) {
      this.item = 11;
    }
    this.month = this.monthToList[this.item];
  }



}
