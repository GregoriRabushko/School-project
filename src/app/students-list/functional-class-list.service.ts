import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FunctionalClassListService {

  private classesLists: string[] = ['11', '10', '9', '8', '11', '10', '9', '8'];

  constructor() { }

  getData () {
    return this.classesLists;
  };

  // addData () {
  //   this.classesLists.push(numberClasses);
  // }
}
