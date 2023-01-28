import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulletin-board',
  templateUrl: './bulletin-board.component.html',
  styleUrls: ['./bulletin-board.component.scss']
})
export class BulletinBoardComponent implements OnInit {

  numberItems:number[] = [];


  constructor() { }

  ngOnInit(): void {
    for(let i = 1; i<16; i++) {
      this.numberItems.push(i);
      console.log(this.numberItems)
    }
  }



}
