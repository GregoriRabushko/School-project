import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {

  countNumberStudent = 0;
  students: string[] = [];
  studentsName:string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addStudentToList() {
    this.countNumberStudent += this.countNumberStudent;
    this.students.push(this.studentsName);
  }

}
