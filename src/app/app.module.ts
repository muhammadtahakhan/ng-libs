import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertComponent } from './alert/alert.component';
import { ExampleComponent } from './example/example.component';
import { CurtainModalModule } from 'projects/curtain-modal/src/public-api';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CurtainModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ AlertComponent, ExampleComponent ],
})
export class AppModule { }
