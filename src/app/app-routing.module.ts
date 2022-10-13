import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadPageComponent } from './pages/load-page/load-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { SoapPageComponent } from './pages/SOAP/soap-page/soap-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LavenderSoapPageComponent } from './pages/SOAP/lavender-soap-page/lavender-soap-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';



const routes: Routes = [
  { path: 'home-page', component: HomePageComponent },
  { path: 'load-page', component:LoadPageComponent },
  { path: 'products-page', component:ProductsPageComponent},
  { path: 'soap-page', component:SoapPageComponent},
  { path: 'contact-page', component:ContactPageComponent},
  { path: 'profile-page', component:ProfilePageComponent},
  { path: 'lavender-soap-page', component:LavenderSoapPageComponent},
  { path: 'login-page', component:LoginPageComponent},

  { path: '', redirectTo: '/load-page', pathMatch:'full' },

]

@NgModule({
  declarations: [],
  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
