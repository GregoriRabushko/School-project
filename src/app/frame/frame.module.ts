import {NgModule} from "@angular/core";
import {RouterModule, RouterOutlet, Routes} from '@angular/router';
import {FrameComponent} from "./frame.component";
import {HeaderNavComponent} from "./header-nav/header-nav.component";
import {frameRout} from "./frame.rout";
import {appRoute} from "../app.route";
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    FrameComponent,
    HeaderNavComponent,
    FooterComponent

  ],
  imports: [
    RouterOutlet,
    RouterModule.forRoot(frameRout)


  ],
  providers: [],
    exports: [
        FrameComponent,
        FooterComponent
    ],
  bootstrap: []
})
export class FrameModule { }
