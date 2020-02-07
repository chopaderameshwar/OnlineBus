import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutinfoupload',
  templateUrl: './aboutinfoupload.component.html',
  styleUrls: ['./aboutinfoupload.component.css']
})
export class AboutinfouploadComponent implements OnInit {

  model:any={};

  e:any[]=[];
  
    constructor() { }
  
    ngOnInit() {
      this.e=JSON.parse(localStorage.getItem("about"));
    }
    save()
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
  
      {
        alert('Added  about  Info Successfully........');
      }
          this.model={};
    }
    deleteabout(i){
      this.e.splice(i,1);
      localStorage.setItem("about",JSON.stringify(this.e));
      this.e=JSON.parse(localStorage.getItem("about"));
      console.log(i);
    }
    myvalue;
    model2:any={}
    
      editabout(i){
        console.log(i);
        this.model2.about=this.e[i].about;
        this.myvalue=i;
    
      }
    
      updateabout(){
        console.log("hello");
        let k=this.myvalue;
       
         for(let i=0;i<this.e.length;i++)
        {
          console.log(i);
         if(i==k)
         {
           this.e[i]=this.model2;
           localStorage.setItem("about",JSON.stringify(this.e));
           this.e=JSON.parse(localStorage.getItem("about"));
           this.model2={};
         }
         {
          alert('update  about info Successfully........');
        }
        }
      }
}
