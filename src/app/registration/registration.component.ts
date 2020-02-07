import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SerService } from '../ser.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userform: FormGroup;

  constructor(private r: Router, private ab: SerService) { }


  @Input() Email: string;
  model: any = {};
  e: any[] = [];
  ngOnInit() {
  }

  temp: any[] = [];

  empadd() {
    this.ab.getdata(this.model).subscribe();

    console.log("hello");
    alert('Registration Success');
    this.r.navigate(['/login']);
  }


}
