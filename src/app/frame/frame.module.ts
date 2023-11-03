import {NgModule} from "@angular/core";
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {FrameComponent} from "./frame.component";
import {HeaderNavComponent} from "./header-nav/header-nav.component";
import {frameRout} from "./frame.rout";
import {appRoute} from "../app.route";




@NgModule({
  declarations: [
    FrameComponent,
    HeaderNavComponent

  ],
  imports: [
    RouterOutlet,
    RouterModule.forRoot(frameRout)


  ],
  providers: [],
  exports: [
    FrameComponent
  ],
  bootstrap: []
})
export class FrameModule { }
