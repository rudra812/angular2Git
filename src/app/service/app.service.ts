import { Injectable } from '@angular/core';

@Injectable()
export class SampleService{
    getSampleJSOnData(){
        return [
            {name:"Rudra",EmpID:614673},
            {name:"Biswajit",EmpID:553434},
            {name:"Aditya",EmpID:878787}
        ];
    }
}
