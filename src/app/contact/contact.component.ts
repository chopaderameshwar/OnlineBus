import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  model:any={};

  e:any[]=[];
  
  constructor(private p_add:MyserviceService){}
  
    ngOnInit() {
      this.e=JSON.parse(localStorage.getItem("contact"));
    }
    data:any;
// selectedfile:File=null;
// onfileselected(file:FileList)
// {
//   this.selectedfile=file.item(0);
//   var reader=new FileReader();
//   reader.onload=(event:any)=>
//   {
//     this.model.img=event.target.result;
//   }
//   reader.readAsDataURL(this.selectedfile);
// }
 
    addEmployee()
    {
     console.log(this.model);
  
     let emp=JSON.parse(localStorage.getItem("contact"));
     if(emp==null)
     {
       emp=[];
     }
     emp.push(this.model);
      localStorage.setItem("contact",JSON.stringify(emp));
      this.e=JSON.parse(localStorage.getItem("contact"));
  
      {
        alert('Added  Record Is Successfully........');
      }
          this.model={};
    }
    

}
