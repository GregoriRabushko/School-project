import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pet-project';

  creatClassSelection = true;
  toStudentsList = false;
  classSelection = false;

  creatNewList () {
    this.toStudentsList = true;
    this.classSelection = false;
    this.creatClassSelection = false;
  }

  creatList() {
    this.classSelection = !this.classSelection;
  }
}
