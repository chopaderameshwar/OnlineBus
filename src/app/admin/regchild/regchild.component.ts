import { Component ,Input,Output,EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-regchild',
  templateUrl: './regchild.component.html',
  styleUrls: ['./regchild.component.css']
})
export class RegchildComponent implements OnInit {

  ngOnInit()
  {
   
  }

  @Input()
    all:number;
  @Input()
    male:number;
  @Input()
    female:number;

    selectradiobutton:string="all";

    @Output()
          selectr=new EventEmitter();

          onselection(){
            this.selectr.emit(this.selectradiobutton);
          }

  constructor() { }


}

