import {Pipe, PipeTransform} from '@angular/core';
import {Order} from "./order.model";

@Pipe({name: 'filterPrice'})
export class MyFilterPipe implements PipeTransform {
  transform(items?: Order[], price?: number): Order[] {
    if (items == null) {
      return [];
    }
    if (price == null) {
      return items;
    }
    return items.filter(item => item.price == price);
  }
}
