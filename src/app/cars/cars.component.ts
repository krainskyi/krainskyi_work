import { Component, OnInit, Pipe } from '@angular/core';
import { CarService } from './../service/car.service';
import { TranslationWidth } from '@angular/common';


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
  public car = { brand: '', price: '', year: '', used: true };
  
  world: string = 'car';
  translation: string = 'машина';
  status: boolean = false;

  getWorldStatus(){
    return this.status ? 'car work' : 'car on service';
    
  }

  public sortA(cars){
    cars.sort((a,b)=>{
      return a.price-b.price
    })
    
}
 
  carDelete(index){
    this.carService.deleteCar(index)
  }
  
  carPush(newCar){
    this.carService.addCar(newCar)
    this.cars = this.carService.cars;
  } 

 

}



