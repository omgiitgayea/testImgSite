import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';
import {TennisService} from './tennis.service';
import { ThumbsComponent } from './thumbs/thumbs.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ThumbsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TennisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
