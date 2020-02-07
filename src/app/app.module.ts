import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from'@angular/router';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PilgrimagePackageComponent } from './pilgrimage-package/pilgrimage-package.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { CustomerComponent } from './customer/customer.component';
import { RegComponent } from './admin/reg/reg.component';
import { ContactcustomerComponent } from './admin/contactcustomer/contactcustomer.component';
import { UploadroutesComponent } from './admin/uploadroutes/uploadroutes.component';
import { MymoduleModule } from './mymodule/mymodule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyguardDirective } from './myguard.directive';
import { AboutsComponent } from './abouts/abouts.component';
import { AboutinfouploadComponent } from './admin/aboutinfoupload/aboutinfoupload.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { SliderComponent } from './slider/slider.component';
import{DisplayComponent} from'./display/display.component';
import { RegchildComponent } from './admin/regchild/regchild.component';
import { MypipePipe } from './mypipe.pipe';
import { BookComponent } from './book/book.component';
import{HttpClientModule} from '@angular/common/http';
import { SerService } from './ser.service';


const RouteT:Routes= [
{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home' ,component:HomeComponent},
{path:'about' ,component:AboutsComponent},
{path:'login' ,component:LoginComponent},
{path:'admin' ,component:AdminComponent},
{path:'PilgrimagePackage' ,component: PilgrimagePackageComponent},
{path:'registration' ,component:RegistrationComponent},
{path:'contact' ,component:ContactComponent},
{path:'Contactcustomer',component:ContactcustomerComponent},
{path:'Uploadroutes',component:UploadroutesComponent},
{path:'Reg',component:RegComponent},
{path:'booking',component:BookComponent},
{path:'display/:i',component:DisplayComponent},
{path:'Aboutinfoupload',component:AboutinfouploadComponent},
{path:'pagenotfound' ,component:PagenotfoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    PagenotfoundComponent,
    PilgrimagePackageComponent,
    ContactComponent,
    AdminComponent,
    CustomerComponent,
    RegComponent,
    ContactcustomerComponent,
    UploadroutesComponent,
    MyguardDirective,
    AboutsComponent,
    AboutinfouploadComponent,
    SliderComponent,
    DisplayComponent,
    RegchildComponent,
    MypipePipe,
    BookComponent,
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(RouteT),
    FormsModule,MymoduleModule, BrowserAnimationsModule,NgImageSliderModule, HttpClientModule
  ],
  providers: [SerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
