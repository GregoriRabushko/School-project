import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-magazine',
  templateUrl: './school-magazine.component.html',
  styleUrls: ['./school-magazine.component.scss']
})
export class SchoolMagazineComponent implements OnInit {

    numberToClass = 1;
  creatClassSelection = true;
  classSelection = false;

  constructor() { }

  ngOnInit(): void {
  }

    nextNumberToClass () {
    this.numberToClass++;
    if (this.numberToClass > 11) {
      this.numberToClass = 1;
    }
  }


  creatNewList () {
    this.classSelection = false;
    this.creatClassSelection = false;

  }

  creatList() {
    this.classSelection = !this.classSelection;
  }


  lastNumberToClass() {
    this.numberToClass--;
    if (this.numberToClass < 1) {
      this.numberToClass = 11;
    }
  }

}
