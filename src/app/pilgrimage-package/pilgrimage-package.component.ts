import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-pilgrimage-package',
  templateUrl: './pilgrimage-package.component.html',
  styleUrls: ['./pilgrimage-package.component.css']
})
export class PilgrimagePackageComponent implements OnInit {
myvalue: number;
model: any={};
model2: any={};
addimg=[];
constructor(private p_add:MyserviceService){}

ngOnInit() {
  this.addimg=JSON.parse(localStorage.getItem("img"))
} 
data:any;
selectedfile:File=null;
onfileselected(file:FileList)

{
  this.selectedfile=file.item(0);
  var reader=new FileReader();
  reader.onload=(event:any)=>
  {
    this.model.img=event.target.result;
  }
  reader.readAsDataURL(this.selectedfile);
}
 

 
}
