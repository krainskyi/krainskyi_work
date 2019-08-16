import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  public cars: any = [];
  public addCarResolve;
  public addCarReject;
  constructor() { }

  public addCar(newCar) {
    new Promise((resolve, reject) => {


    const item = { brand: newCar.brand, price: newCar.price, year: newCar.year, used: newCar.used };
    if (!newCar.used) {
      item.year = '2019';
      
    }
    if (item) {
      resolve(item);
    }
    else{
      reject();
    }
     this.cars.push(item);
    newCar.brand = '';
    newCar.price = '';
    newCar.used = '';
    newCar.year = '';
  }).then(this.addCarResolve, this.addCarReject)
}
  deleteCar(index) {
    this.cars.splice(index, 1)
  };

}
