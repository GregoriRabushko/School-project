import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchComponent } from 'src/app/search/search.component';
import { MenuComponent } from 'src/app/menu/menu.component';


@NgModule({
  declarations: [
    SearchComponent,
    MenuComponent,

  ],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
