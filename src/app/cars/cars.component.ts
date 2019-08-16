import { Component, OnInit, Pipe } from '@angular/core';
import { CarService } from './../service/car.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
})
export class CarsComponent implements OnInit {

  constructor(private carService: CarService) { }
  
  ngOnInit() {
  }
  public cars: any = [];
  public car = { brand: '', price: '', year: '', used: false };

  public sortA(cars){
    cars.sort((a,b)=>{
      return a.price-b.price
    })
    
}
  public getBackgroundColor(price, year, used) {
    let result = 'none';

    if (price < 12000) {
      return 'green';
    }
    if (price > 12000 && price < 25000) {
      return 'yellow';
    }
    if (price > 25000) {
      return 'red';
    }
    if (!used == false) {
      return  'red';
    }
    return result;

  }
  carDelete(index){
    this.carService.deleteCar(index)
  }
  
  carPush(newCar){
    this.carService.addCar(newCar)
    this.cars = this.carService.cars;
  } 

 

}



