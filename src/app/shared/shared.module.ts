import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LazyImageComponent } from './components/lazy-image/lazy-image.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent,
    LazyImageComponent,
    HomePageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule 
  ],
  exports:[
    SidebarComponent,
    LazyImageComponent,
    HomePageComponent,
    AboutPageComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
