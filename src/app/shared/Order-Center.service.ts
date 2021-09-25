import {Order} from "./order.model";
import {EventEmitter} from "@angular/core";

export class OrderCenterService {
  ordersChanged = new EventEmitter<Order[]>();
  ordersCount: number;

  private Orders: Order[] = [
    new Order(
      "Test",
      "61109 Alan Motorway, North Corey, CA 92789",
      "CREATED",
      "d0791ce1",
      "Caesar salad",
      1,
      6
    ), new Order(
      "Test2",
      "61109 Alan Motorway, North Corey, CA 92789",
      "CREATED",
      "d0791ce1",
      "Caesar salad",
      1,
      1
    ),
    new Order(
      "Carla Garner",
      "61109 Alan Motorway, North Corey, CA 92789",
      "CREATED",
      "d0791ce1",
      "Caesar salad",
      4692,
      6
    ),
    new Order(
      "Carla Garner",
      "61109 Alan Motorway, North Corey, CA 92789",
      "COOKED",
      "d0791ce1",
      "Caesar salad",
      4692,
      13
    ),
    new Order(
      "Elizabeth Shepherd",
      "923 Nicholas Trafficway, North Kyle, CA 95616",
      "CREATED",
      "53e869ef",
      "Chicken pad thai",
      4314,
      10
    )]

  getAllOrders() {
    this.ordersCount = this.Orders.slice().length;
    console.log('ordersCount: ' + this.Orders.slice().length)
    return this.Orders.slice().sort((a, b) => a.sent_at_second - b.sent_at_second);
  }

  searchOrdersByPrice(price: number) {
    if (price == undefined) {
      this.ordersChanged.emit(this.Orders.slice());
      return 0;
    } else {
      let filterOrderList: Order[] = this.Orders.slice().filter(
        x => x.price == price).sort((a, b) => a.sent_at_second - b.sent_at_second);
      this.ordersChanged.emit(filterOrderList);
      return this.ordersCount = filterOrderList.length;
    }
  }
}
