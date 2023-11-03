import { Component, OnInit, Input } from '@angular/core';
import { FunctionalClassListService } from "./functional-class-list.service";
import { MoreData } from "./functional-class-list.service";
import {ClassInfo, SelectSchoolListService} from 'src/app/components/select-school-list/select-school-list.service';
import { HttpClient} from '@angular/common/http';
import { Observable} from "rxjs";
import { map } from "rxjs/operators";
import {ActivatedRoute, Route} from "@angular/router";
import {User} from "../interface";



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
  // students: string[] = [];
  students: string[] = [
    'Борозна Олег Александрович',
    'Гиро Егор Сергеевич',
    'Земко Роман Никитич',
    'Казакова Анастасия Сергеевна',
    'Климентова София Маратовна',
    'Ковалёв Захар Николаевич',
    'Коваленок Данила Дмитриевич',
    'Красовская Екатерина Сергеевна',
    'Лелеш Иван Александрович',
    'Лицкевич Владислав Анатольевич',
    'Логовский Евгений Александрович',
    'Майсак Кирилл Александрович',
  ];
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


    // get data of json
    // const arToInfo:Info = {id: 0, name: '' }
    // this.selectSchoolListService.getInfo()
    //   .subscribe((data:Info)=> this.arrToInfo = {
    //     id: data.id,
    //     name: data.name
    //   });

  }

  previousMonth() {
    --this.item ;
    if(this.item < 0) {
      this.item = 11;
    }
    this.month = this.monthToList[this.item];
  }
}

export interface Info {
  id:number,
  name:string
}
