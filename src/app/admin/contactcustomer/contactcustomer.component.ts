
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactcustomer',
  templateUrl: './contactcustomer.component.html',
  styleUrls: ['./contactcustomer.component.css']
})
export class ContactcustomerComponent implements OnInit {


  
 
  model:any={};

  e:any[]=[];
  
    constructor() { }
  
    ngOnInit() {
      this.e=JSON.parse(localStorage.getItem("contact"));
   }

}
