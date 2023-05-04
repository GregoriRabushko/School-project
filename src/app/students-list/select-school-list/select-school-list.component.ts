import { Component, OnInit } from '@angular/core';
import { FunctionalClassListService } from 'src/app/students-list/functional-class-list.service';
@Component({
  selector: 'app-select-school-list',
  templateUrl: './select-school-list.component.html',
  styleUrls: ['./select-school-list.component.scss'],
  providers: [FunctionalClassListService]
})
export class SelectSchoolListComponent implements OnInit {

  constructor(private listService: FunctionalClassListService) { }
  ngOnInit(): void {
  }

  classesName: string[] = this.listService.getData();


}
