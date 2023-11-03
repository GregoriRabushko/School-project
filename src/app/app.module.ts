import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { HttpClientModule }   from '@angular/common/http';
import { appRoute } from './app.route';
import { FrameModule } from './frame/frame.module';
import { ComponentsModule } from './components/components.module';
import {SharedModule} from "./common/shared.module";
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule,
    SharedModule,
    ComponentsModule,
    FrameModule,
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
