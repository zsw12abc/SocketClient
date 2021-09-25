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

    // if (price == undefined) {
    //   this.socketOrdersChanged.emit(this.socketOrders);
    //   return 0;
    // } else {
    //   let filterOrderList: Order[] = this.Orders.slice().filter(
    //     x => x.price == price).sort((a, b) => a.sent_at_second - b.sent_at_second);
    //   this.ordersChanged.emit(filterOrderList);
    //   // this.socketOrdersChanged.emit(filterSocketOrderList)
    //   return this.ordersCount = filterOrderList.length;
    // }
  }
}
