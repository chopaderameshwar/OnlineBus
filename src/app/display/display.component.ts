import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  [x: string]: {};
  
emp:any[];
e:any;
t:number;
constructor(private h:ActivatedRoute)
 {
   this.t=this.h.snapshot.params['i'];
 }
ngOnInit()
 {
  this.emp=JSON.parse(localStorage.getItem('route'));

  for(let i=0;i<this.emp.length;i++)
  {
    if(this.t==i)
    {
   this.e=this.emp[i];
    }
  }

}


}
