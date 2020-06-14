import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgTrackByComponent } from './ng-track-by/ng-track-by.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    NgTrackByComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
