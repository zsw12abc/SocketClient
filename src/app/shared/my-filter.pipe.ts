import {Pipe, PipeTransform} from '@angular/core';
import {Order} from "./order.model";
import {Observable} from "rxjs";

@Pipe({name: 'filterPrice'})
export class MyFilterPipe implements PipeTransform {
  transform(items: any, price: number): Order[] {
    if (!items || !price) {
      return items;
    }
    let result = []
    let x : Order[] = items as Order[];
    return x.filter(item => item.price.toString().indexOf(price.toString()) !== -1);
  }
}
