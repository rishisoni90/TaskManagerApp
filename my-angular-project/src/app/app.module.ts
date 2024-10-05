import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';  // Ensure this import is correct
import { TaskManagerComponent } from './task-manager/task-manager-component';  // Correct import path
  // Ensure correct path to the component

@NgModule({
  declarations: [
    AppComponent,
  // Declare the TaskManagerComponent here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
