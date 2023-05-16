import { Component, OnInit } from '@angular/core';
import { FunctionalClassListService } from "./functional-class-list.service";
import { MoreData } from "./functional-class-list.service";
import { HttpClient} from '@angular/common/http';
import { Observable} from "rxjs";
import { map } from "rxjs/operators";



@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
})




export class StudentsListComponent implements OnInit {

  countNumberStudent = 0;
  students: string[] = [];
  studentsName:string = '';
  className: string = '';
  monthToList:string[] = ['January', 'February','March','April','May','June','July','August','September','October','November','December',];
  month = this.monthToList[0];
  item = 0

  users:MoreData[] = []


  constructor(private listService: FunctionalClassListService) { }

  ngOnInit(): void {
  }
  addStudentToList() {
    this.countNumberStudent += this.countNumberStudent;
    this.students.push(this.studentsName);
  }
  saveListButton () {
    this.listService.addData(this.className);
  }
  playObserver () {
    this.listService.getRes().subscribe(val => this.users = val);
    console.log(this.users)


  }
  addUserToSchoolList() {

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
