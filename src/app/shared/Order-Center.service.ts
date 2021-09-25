import {Order} from "./order.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Socket} from 'ngx-socket-io'
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class OrderCenterService {
  ordersCount: number;
  socketOrders = this.socket.fromEvent<Order[]>('order_event');
  priceFilter = new EventEmitter<number>();

  constructor(private socket: Socket) {
  }

  searchOrdersByPrice(price: number) {
    this.priceFilter.emit(price);
    let count = 0;
    if (price == undefined) {
      this.ordersCount = 0;
    }
    this.socketOrders.subscribe(orders => {
      for (let order of orders) {
        if (order.price.toString().indexOf(price.toString()) !== -1) {
          count++;
        }
      }
      this.ordersCount = count;
    })
  }
}
