import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadPageComponent } from './pages/load-page/load-page.component'
import { MatCardModule } from '@angular/material/card'
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { SquaredButtonComponent } from './components/squared-button/squared-button.component';
import { LongButtonComponent } from './components/long-button/long-button.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { SoapPageComponent } from './pages/SOAP/soap-page/soap-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { LavenderSoapPageComponent } from './pages/SOAP/lavender-soap-page/lavender-soap-page.component';
import { HeartButtonComponent } from './components/heart-button/heart-button.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    LoadPageComponent,
    SquaredButtonComponent,
    LongButtonComponent,
    ProductsPageComponent,
    SoapPageComponent,
    ContactPageComponent,
    ProfilePageComponent,
    LavenderSoapPageComponent,
    HeartButtonComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    RouterOutlet,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
