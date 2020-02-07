import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {

 
  model:any={};
  selectoption:string='all';

  e:any[]=[];
  
    constructor() { }
  
    ngOnInit() {
      this.e=JSON.parse(localStorage.getItem("registration"));
       }

       
gettotalcout():number{
  return this.e.length;
}

gettotalmalecount():number{
  return this.e.filter(e=>e.gender=='male').length;
}

gettotalfemalecout():number{
  return this.e.filter(e=>e.gender=='female').length;
}


onredioselect(selectedoption:string)
  {
    this.selectoption=selectedoption;
  }

      }
  //   addEmployee()
  //   {
  //    console.log(this.model);
  
  //    let emp=JSON.parse(localStorage.getItem("registration"));
  //    if(emp==null)
  //    {
  //      emp=[];
  //    }
  //    emp.push(this.model);
  //     localStorage.setItem("registration",JSON.stringify(emp));
  //     this.e=JSON.parse(localStorage.getItem("registration"));    
  //         this.model={};
  //   }
    
  //   myvalue;
  // model2:any={}
  