import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abouts',
  templateUrl: './abouts.component.html',
  styleUrls: ['./abouts.component.css']
})
export class AboutsComponent implements OnInit {
  model:any={};

  e:any[]=[];
  
    constructor() { }
  
    ngOnInit() {
      this.e=JSON.parse(localStorage.getItem("about"));
   }
    addEmployee()
    {
     console.log(this.model);
  
     let emp=JSON.parse(localStorage.getItem("about"));
     if(emp==null)
     {
       emp=[];
     }
     emp.push(this.model);
      localStorage.setItem("about",JSON.stringify(emp));
      this.e=JSON.parse(localStorage.getItem("about"));    
          this.model={};
    }
    
    myvalue;
  model2:any={}
  
  }
  
