import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { tick } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor( private temp:HttpClient) { }
  public getdata(num)
  {
    return this.temp.post("http://localhost:8080/website/register",num);
  }
  login(num)
  {
    return this.temp.post("http://localhost:8080/website/login",num);
  }
  saveAdmin(x)
  {
    return this.temp.post("http://localhost:8080/website/adminServlet",x);
  }
  getrout()
  {
    return this.temp.get("http://localhost:8080/website/getroutdata");

  }
}
