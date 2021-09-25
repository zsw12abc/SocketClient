import {Component, OnInit} from '@angular/core';
import {OrderCenterService} from "../shared/Order-Center.service";
import {Order} from "../shared/order.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  socketOrders: Observable<Order[]>;
  priceFilter: number;

  constructor(private orderCenterService: OrderCenterService) {
  }

  ngOnInit(): void {
    this.socketOrders = this.orderCenterService.socketOrders;
    this.orderCenterService.priceFilter.subscribe(price => {
      this.priceFilter = price
    })
  }
}
