import { Component, OnInit } from '@angular/core';
import { SerService } from 'src/app/ser.service';

@Component({
  selector: 'app-uploadroutes',
  templateUrl: './uploadroutes.component.html',
  styleUrls: ['./uploadroutes.component.css']
})
export class UploadroutesComponent implements OnInit {
  model:any={};

  e:any[]=[];
  res:any[]=[];
 
 
  constructor( private a:SerService) { }

   
  
    ngOnInit()
     {
      this.a.getrout().subscribe((r:any)=>this.res=r)
    }

    // route()
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
  
    //   {
    //     alert('Added  Routes Successfully........');
    //   }
    //       this.model={};
    // }
    deleteroute(i){
      this.e.splice(i,1);
      localStorage.setItem("route",JSON.stringify(this.e));
      this.e=JSON.parse(localStorage.getItem("route"));
      console.log(i);
    }
    myvalue;
    model2:any={}
    
      editrout(i){
        console.log(i);
        this.model2.from=this.e[i].from;
        this.model2.to=this.e[i].to;
        this.model2.price=this.e[i].price;
        this.myvalue=i;
    
      }
    
      updateroute(){
        console.log("hello");
        let k=this.myvalue;
       
         for(let i=0;i<this.e.length;i++)
        {
          console.log(i);
         if(i==k)
         {
           this.e[i]=this.model2;
           localStorage.setItem("route",JSON.stringify(this.e));
           this.e=JSON.parse(localStorage.getItem("route"));
           this.model2={};
         }
         {
          alert('update  Routes Successfully........');
        }
        }
      }

     
}
