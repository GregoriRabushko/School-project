import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';
import { appRouting } from './app.routing';
import { FrameModule } from './frame/frame.module';
import {SharedModule} from "./common/shared.module";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting),
    HttpClientModule,
    SharedModule,
    FrameModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
