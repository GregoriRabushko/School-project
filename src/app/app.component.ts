import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pet-project';

  directorSchool = false;
  teacherSchool = false;
  parentStudent = false;
  studentSchool = false;
  householdWorkers = false;
  registration = false;
  authorization = false;

}
