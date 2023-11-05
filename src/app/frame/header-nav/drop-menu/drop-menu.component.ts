import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-drop-menu',
  templateUrl: './drop-menu.component.html',
  styleUrls: ['./drop-menu.component.scss']
})
export class DropMenuComponent implements OnInit {

  mouseEvent = false
  @Input() infoToMenu:InfoToMenu = {
    aText: '',
    liContent: [],
  }
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.showOrHiddenUl(true);
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.showOrHiddenUl(false);
  }

  showOrHiddenUl(item:boolean) {
    setTimeout(()=>{
      this.mouseEvent = item;
    },500);
  }
}
export interface InfoToMenu {
  aText: string,
  liContent:ObjStr[]
}
export interface ObjStr {
  name:string, rout:string
}
