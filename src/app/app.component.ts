import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pet-project';

  truOrFalse = true;

  truOrFalseVue () {
    this.truOrFalse = !this.truOrFalse;
  }


}
