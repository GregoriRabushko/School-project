import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  val:string = '';
  itemsSchool:string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  addItem(val:string) {
    this.itemsSchool.push(val);
    this.val = '';
  }

  deleteItem(i:number) {
    this.itemsSchool.splice(i,1);
  }
}
