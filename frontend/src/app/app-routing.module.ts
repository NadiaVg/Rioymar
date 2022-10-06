import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadPageComponent } from './pages/load-page/load-page.component';



const routes: Routes = [
  { path: 'menu', component: MenuComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'load-page', component:LoadPageComponent },

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
