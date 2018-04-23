


import { SummaryPipe } from './summary.pipe';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import {FormsModule} from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
@NgModule({
  declarations: [ AppComponent,CoursesComponent,SummaryPipe,FavoriteComponent],
  imports: [BrowserModule,FormsModule],
  exports: [FavoriteComponent], 
  bootstrap: [AppComponent],
  providers: [CoursesService]
})
export class AppModule { }
