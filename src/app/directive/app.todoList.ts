import {Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
   selector:'todo-list',
   moduleId: module.id,
   templateUrl:'../template/app.todoList.html',
   inputs:['loginParentData'],
   outputs:['childEventData'] 
})

export class TodoList implements OnInit{
    username:any;
    loginParentData:string;    
    ngOnInit(){
         this.username = this.loginParentData;
    }
    getUserId(){
        console.log(this.username);
    }
    childEventData = new EventEmitter<string>();
    sendDataToParent(val:string){
        this.childEventData.emit(val);
    }
}