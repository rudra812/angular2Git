import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { TodoList } from './directive/app.todoList';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ AppComponent,TodoList ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
