import { Component, OnInit } from '@angular/core';
import { SerService } from '../ser.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private r: Router, private s: SerService) { }

  ngOnInit() { }


  data: any = {};

  ongo() {
    this.s.login(this.data).subscribe(d => this.my(d));
  }
  my(d) {
    if (d.Msg == 'Error') {
      alert("password is wrong...");
    }
    else if (d.Msg == 'Success') {
      alert("success...");
      localStorage.setItem("curr",JSON.stringify(this.data));

      this.r.navigate(['/booking']);
    }
    else {
      alert("admin success...");
      this.r.navigate(['/admin']);
    }
  }


}
