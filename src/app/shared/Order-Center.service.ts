import {Order} from "./order.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Socket} from 'ngx-socket-io'
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class OrderCenterService {
  ordersCount = new EventEmitter<number>();
  socketOrders = this.socket.fromEvent<Order[]>('order_event');
  priceFilter = new EventEmitter<number>();

  constructor(private socket: Socket) {
  }

  async searchOrdersByPrice(price: number) {
    this.priceFilter.emit(price);
    let count = 0;
    if (price === undefined || price == null) {
      this.ordersCount.emit(0);
    } else {
      await this.socketOrders.forEach(orders => {
        for (let order of orders) {
          if (order.price.toString().indexOf(price.toString()) !== -1) {
            count++;
          }
        }
        this.ordersCount.emit(count);
      })
    }
    this.ordersCount.emit(0);
  }
}
