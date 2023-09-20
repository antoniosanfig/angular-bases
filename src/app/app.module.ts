import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { CounterModule } from './counter/components/counter.module';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/components/heroes.module';
import { DbzModule } from './dbz/dbz.module';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing-module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    //HttpClientModule,
    //CounterModule,
    //HeroesModule,
    //DbzModule,
    //GifsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
