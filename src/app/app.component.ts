import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'input';
  temp:any={};
  constructor()
  {
  this.temp=JSON.parse(localStorage.getItem('curr'));
  }

  ongo(){
    window.localStorage.removeItem("curr");
     // location.reload();
    
(function()
{
  if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }
})();

  }
}
