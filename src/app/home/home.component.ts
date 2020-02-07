import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

path='/assets/fe.png';
model:any={};

e:any[]=[];

  constructor() { }

  ngOnInit() {
    this.e=JSON.parse(localStorage.getItem("route"));
    if (location.href.indexOf('reload')==-1)
    {
       location.href=location.href+'?reload';
    }

 }
  addEmployee()
  {
   console.log(this.model);

   let emp=JSON.parse(localStorage.getItem("route"));
   if(emp==null)
   {
     emp=[];
   }
   emp.push(this.model);
    localStorage.setItem("route",JSON.stringify(emp));
    this.e=JSON.parse(localStorage.getItem("route"));    
        this.model={};
  }

  
//   myvalue;
// model2:any={}

}


