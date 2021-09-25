import {Component, OnInit} from '@angular/core';
import {OrderCenterService} from "../shared/Order-Center.service";
import {Order} from "../shared/order.model";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orders: Order[];

  constructor(private orderCenterService: OrderCenterService) {
  }

  ngOnInit(): void {
    this.orders = this.orderCenterService.getAllOrders();
    this.orderCenterService.ordersChanged.subscribe(
      (orders: Order[]) => {
        this.orders = orders;
      }
    )
  }

}
