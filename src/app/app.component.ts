import { Component } from '@angular/core';
import { CarService } from './service/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my profile';
  constructor(private carService: CarService) { 

    console.log(this.carService.addCarResolve)
  }



}
