import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pet-project';
  countNumberStudent = 0;

  addStudentToList() {
    this.countNumberStudent++;
    console.log(this.countNumberStudent)
  }

}
