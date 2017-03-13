import { Component ,OnInit} from '@angular/core';
import { User } from './app.userInterface';
import {SampleService} from './service/app.service';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: './template/app.component.html',
  providers:[SampleService] 
})
export class AppComponent implements OnInit { 
  name:string = 'Angular'; 
  user:User;
  defaultGender:string;
  loginParentData:string= 'rusah1';  
  loginChildData:string;
  empArr:any;
  themes = [
      { backgroundColor: 'black', fontColor: 'white', display: 'Dark' },
      { backgroundColor: 'white', fontColor: 'black', display: 'Light' },
      { backgroundColor: 'grey', fontColor: 'white', display: 'Sleek' }
 ];
  genders = [
      { value: 'F', display: 'Female' },
      { value: 'M', display: 'Male' }
  ];
  constructor(private _sampleService:SampleService){

  }
  ngOnInit(){
    this.name = 'Angular';
    this.user = {
      isActive:true,
      gender:this.genders[1].value,    
      selectedTheme:this.themes[0].backgroundColor
    }; 
    this.empArr = this._sampleService.getSampleJSOnData();
    console.log(this.empArr);   
  } 
}
