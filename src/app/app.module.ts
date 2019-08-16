import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { FormsModule } from '@angular/forms';
import { CarsDirectDirective } from './cars/cars-direct.directive';
import { CarPipe } from './cars/car.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarsDirectDirective,
    CarPipe
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
