import {NgModule} from "@angular/core";
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {FrameComponent} from "./frame.component";
import {HeaderNavComponent} from "./header-nav/header-nav.component";
import {frameRout} from "./frame.rout";
import { FooterComponent } from './footer/footer.component';
import {HeaderCModule} from "../components/header-c/header-c.module";
import { DropMenuComponent } from './header-nav/drop-menu/drop-menu.component';
import {NgForOf, NgIf} from "@angular/common";




@NgModule({
  declarations: [
    FrameComponent,
    HeaderNavComponent,
    FooterComponent,
    DropMenuComponent

  ],
  imports: [
    RouterOutlet,
    RouterModule.forRoot(frameRout),
    HeaderCModule,
    NgForOf,
    NgIf


  ],
  providers: [],
    exports: [
        FrameComponent,
        FooterComponent
    ],
  bootstrap: []
})
export class FrameModule { }
