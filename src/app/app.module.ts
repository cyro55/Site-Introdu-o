import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

import {RouterModule} from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path:'', component: AppComponent},
    {path:'sobre', component: SobreComponent}
  ]) ],
  declarations: [ AppComponent, HelloComponent, NavbarComponent,HomeComponent, SobreComponent ],
  bootstrap:    [ AppComponent, ]
})
export class AppModule { }
