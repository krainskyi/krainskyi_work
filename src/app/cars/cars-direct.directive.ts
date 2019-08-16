import { Directive, ElementRef, Input, HostListener,   } from '@angular/core';
import { CarsComponent } from './cars.component';

@Directive({
  selector: '[appCarsDirect]'
  
})
export class CarsDirectDirective {

  constructor(private el: ElementRef) { }
  @Input('car') car: {price:number,year:number,used:boolean};
  @Input('appCarsDirect') highlightColor: string;
  @HostListener('mouseenter') onMouseEnter() {
    this.carsdirect(this.highlightColor ||  'red');
  }
  // @HostListener('mouseleave') onmouseleave() {
  //   this.carsdirect(null);
  // }
  private carsdirect(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.textTransform = 'uppercase';
    }
    @HostListener('mouseleave') onmouseleave() {
      this.el.nativeElement.style.textTransform = null;

      this.el.nativeElement.style.backgroundColor = this.getDefaultBackgroundColor(this.car);
    }
  @HostListener('click') click() {
    this.carsdirect('blue');
  }
  public getDefaultBackgroundColor(car) {
    let result = 'none';

    if (car.price < 12000) {
      return 'green';
    }
    if (car.price  > 12000 && car.price < 25000) {
      return 'yellow';
    }
    if (car.price  > 25000) {
      return 'red';
    }
    if (!car.used == false) {
      return  'red';
    }
    return result;

  }
}

