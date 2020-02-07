import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  model:any={};

  e:any[]=[];
  res:any[]=[];
  constructor( private a:SerService) { }

  ngOnInit() {
    // this.e=JSON.parse(localStorage.getItem("route"));

this.a.getrout().subscribe((r:any)=>this.res=r)
  }
  // addEmployee()
  // {
  //  console.log(this.model);

  //  let emp=JSON.parse(localStorage.getItem("route"));
  //  if(emp==null)
  //  {
  //    emp=[];
  //  }
  //  emp.push(this.model);
  //   localStorage.setItem("route",JSON.stringify(emp));
  //   this.e=JSON.parse(localStorage.getItem("route"));    
  //       this.model={};
  // }

  

}
